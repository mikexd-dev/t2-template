import { useQuery } from "@tanstack/react-query";
import { getData } from "../pages/api/hello";

const fetchHelloData = () => {
  return () => fetch("/api/hello").then((res) => res.json() as Promise<any>);
};

const useHello = () => {
  return useQuery(["hello"], fetchHelloData());
};

export default useHello;
