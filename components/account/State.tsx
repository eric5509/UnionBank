'use client'
import { useAppDispatch } from "@/redux/store/hooks";
import { TAccount } from "./type";
import { loadAllAccounts } from "@/redux/slices/account";
import { useEffect } from "react";

type Props = {
  results: TAccount[];
};

export default function State({ results }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllAccounts(results));
  }, []);
  return <div></div>
}
