import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "../src/component/app/Home/Home/index.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "@/src/redux/feture/eventsSlice.js";


const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const evetnsValue = useSelector(state => state.eventsSlice)
  console.log(evetnsValue, ' this is staet');
  const dispatch = useDispatch();
  useEffect(() => {
		dispatch(fetchEvents());
  }, []);


  
  return (
    <>
      <HomePage />
    </>
  );
}
