import { CheckMark } from "./CheckMark";

export const columns = [
  { Header: "Organization", accessor: "Organization", minWidth: 200 },
  {
    Header: "Mortality Data (Health)",
    accessor: "Mortality Data (Health)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Overdose (EMS/Law)",
    accessor: "Overdose (EMS/Law)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Permanent Prescription Drop Boxes",
    accessor: "Permanent Prescription Drop Boxes",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Treatment Facilities",
    accessor: "Treatment Facilities",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "# of Prescriptions (from state PDMP)",
    accessor: "# of Prescriptions (from state PDMP)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Public Naloxone Access",
    accessor: "Public Naloxone Access",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Mental Health Facilities",
    accessor: "Mental Health Facilities",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Hospitilzations",
    accessor: "Hospitilzations",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Law Enforcement Arrests (Heroin Seizures)",
    accessor: "Law Enforcement Arrests (Heroin Seizures)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Alternative Pain Management (Acupuncture, Chiro, etc)",
    accessor: "Alternative Pain Management (Acupuncture, Chiro, etc)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Recovery Resources (Post Treatment resources)",
    accessor: "Recovery Resources (Post Treatment resources)",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  },
  {
    Header: "Wastewater",
    accessor: "Wastewater",
    minWidth: 150,
    Cell: cell => (cell.value ? <CheckMark /> : null),
    style: { display: "flex", alignItems: "center" }
  }
];
