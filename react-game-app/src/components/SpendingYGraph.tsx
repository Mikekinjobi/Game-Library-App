/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import * as Plot from "@observablehq/plot";
import { useRef, useEffect /*useState, LegacyRef*/ } from "react";
import { transaction } from "./TransactionsList";

interface sorted {
  expense: string;
  value: number;
}


interface Props {
  userTransactions: transaction[];
}

export default function SpendingYGraph({ userTransactions }: Props) {
  

  const plotRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const sorting: Record<string, number> = {};
  const countedArray: sorted[] = [];
  const expenses: transaction[] = userTransactions.filter(
    (transaction) => transaction.amount < 0
  );
  expenses.forEach((expense) => {
    if (!sorting[expense.type]) {
      sorting[expense.type] = 0;
    }
    sorting[expense.type]++;
  });

  for (const key in sorting) {
    countedArray.push({ expense: key, value: sorting[key] });
  }
    const barChart = Plot.plot({
      marks: [
        Plot.barY(countedArray, {
          x: "expense",
          y: "value",
        }),
      ],
    //   y: { grid: true },
    });
    if (plotRef.current) {
      plotRef.current.append(barChart);
      return () => barChart.remove();
    }
  }, [userTransactions]);
  return (
    <>
    <h1>Spending Overview</h1>
  <div ref={plotRef}></div>;
  </>
  )
}
