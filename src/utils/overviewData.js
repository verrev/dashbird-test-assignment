import Lambda from "components/core/icons/Lambda";
import Bulb from "components/core/icons/Bulb";
import Warning from "components/core/icons/Warning";

export const initialOverviewData = [
  {
    title: "RESOURCES",
    orderbyTitle: "Execution time",
    Icon: Lambda,
    contents: [
      {
        id: 0,
        title: "usage-service-prod-record-inventory-usage-on-two-lines",
        subtitle: "125ms"
      },
      {
        id: 1,
        title: "usage-service-prod-record-inventory-usage",
        subtitle: "125ms"
      },
      {
        id: 2,
        title: "usage-service-prod-record-inventory-usage",
        subtitle: "125ms"
      }
    ]
  },
  {
    title: "INSIGHTS",
    Icon: Bulb,
    orderbyTitle: "Latest",
    contents: [
      {
        id: 3,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 4,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 5,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      }
    ]
  },
  {
    title: "ALERTS",
    Icon: Warning,
    orderbyTitle: "Latest",
    contents: [
      {
        id: 6,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 7,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 8,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      }
    ]
  }
];

export const initialSortOrders = [
  { title: "RESOURCES", ascending: false },
  { title: "INSIGHTS", ascending: false },
  { title: "ALERTS", ascending: false }
];

export const getSortedOverviewData = (
  iod,
  overviewDataToBeSorted,
  sortOrders
) =>
  overviewDataToBeSorted.map((overview, i) => {
    const isAscending = sortOrders.find(({ title }) => title === overview.title)
      .ascending;

    const nextContents = [...iod[i].contents];

    return {
      ...overview,
      contents: [...(isAscending ? nextContents.reverse() : nextContents)]
    };
  });
