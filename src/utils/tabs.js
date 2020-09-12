import { range } from "d3";
import Clock from "components/core/icons/Clock";
import Sum from "components/core/icons/Sum";
import Memory from "components/core/icons/Memory";
import Page from "components/core/icons/Page";

const POINT_COUNT = 32;

export default [
  {
    title: "AVG. RESPONSE DELAY",
    Icon: Clock,
    value: "23ms",
    data: range(POINT_COUNT).map(() => Math.random())
  },
  {
    title: "LAST QUEUE SIZE",
    Icon: Sum,
    value: 32,
    data: range(POINT_COUNT).map(() => Math.random())
  },
  {
    title: "AVG. PAYLOAD SIZE",
    Icon: Memory,
    value: "1.35kb",
    data: range(POINT_COUNT).map(() => Math.random())
  },
  {
    title: "DEAD LETTER QUEUE",
    Icon: Page,
    value: 0,
    data: range(POINT_COUNT).map(() => Math.random())
  }
];
