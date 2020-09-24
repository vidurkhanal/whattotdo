import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = (selectedProj) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTask, setArchivedTask] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("uid", "==", "q9CsCZPp5C");

    unsubscribe =
      selectedProj && !collatedTasksExist(selectedProj)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProj))
        : selectedProj === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProj === "INBOX" || selectedProj === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snaphot) => {
      const newTasks = snaphot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      setTasks(
        selectedProj === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTask(newTasks.filter((task) => task.archived !== false));
    });
    return () => {
      unsubscribe();
    };
  }, [selectedProj]);

  return { tasks, archivedTask };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("uid", "==", "q9CsCZPp5C")
      .orderBy("projectid")
      .get()
      .then((snaphot) => {
        const allProjects = snaphot.docs.map((project) => ({
          ...project.data(),
          docID: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);
  return { projects, setProjects };
};
