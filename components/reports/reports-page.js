import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const ReportsPage = () => {
  const [annualReports, setAnnualReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState({ key: "", title: "" });

  useEffect(() => {
    fetch(`/api/annual-reports`)
      .then((response) => response.json())
      .then((data) => setAnnualReports(data));
  }, []);

  const handleChange = (e) => {
    e.persist();
    const selectedOption = e.target.selectedOptions[0];
    setSelectedReport({
      key: selectedOption.dataset.key,
      title: selectedOption.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const reportUrl = [
      "https://paact.s3.ap-southeast-2.amazonaws.com/",
      selectedReport.key,
    ].join("");
    window.open(reportUrl, "_blank");
  }

  return (
    <section className="useful-links-page pt-100 pb-120">
      <Container>
        <br />
        <p>
          Note: The views expressed in these reports may not reflect the views
          of the Prisoners Aid (ACT)
        </p>
        <div className="causes-col__1">
          <div className="cause-card">
            <div className="cause-card__inner">
              <div className="cause-card__content">
                <h3>Annual Reports</h3>
                <br />
                <form className="" onSubmit={handleSubmit}>
                  <select
                    name="annualReports"
                    style={{ width: "auto" }}
                    className="custom-select"
                    value={selectedReport.title}
                    onChange={handleChange}
                    id="annual-reports"
                  >
                    <option value="" disabled hidden>
                      Select a report
                    </option>
                    {annualReports.map((report) => (
                      <option
                        key={report.key}
                        data-key={report.key}
                        value={report.title}
                      >
                        {report.title}
                      </option>
                    ))}
                  </select>
                  <input
                    type="submit"
                    className="btn"
                    style={{ color: "#F26532" }}
                    value={
                      selectedReport.title
                        ? `Click to view ${selectedReport.title} Report`
                        : ""
                    }
                  ></input>
                </form>

                <br />
              </div>
            </div>
          </div>

          <div className="cause-card">
            <div className="cause-card__inner">
              <div className="cause-card__content">
                <h3>Intern Reports</h3>
                <br />
                <a href="./pdf/A1.pdf" style={{ color: "#F26532" }}>
                  An Awful State of Affairs For You: Reflecting on the
                  Experiences of Older Detainees in the ACT
                </a>
              </div>
            </div>
          </div>

          <div className="cause-card">
            <div className="cause-card__inner">
              <div className="cause-card__content">
                <h3>
                  Alexander Maconochie Centre (AMC) - Adult Correctional Centre
                  Reports
                </h3>
                <br />
                <a href="./pdf/B1.pdf" style={{ color: "#F26532" }}>
                  Alexander Maconochie Centre Functional Brief (2005), ACT
                  Department of Justice & Community Safety
                </a>
                <br />
                <a href="./pdf/B2.pdf" style={{ color: "#F26532" }}>
                  ACT Corrective Services Discipline Adjudications (2008), ACT
                  Ombudsman
                </a>
                <br />
                <a href="./pdf/B3.pdf" style={{ color: "#F26532" }}>
                  Healthy or harmful? Mental health and the operational regime
                  of the new ACT prison (2008), ACT Community Coalition on
                  Corrections
                </a>
                <br />
                <a href="./pdf/B4.pdf" style={{ color: "#F26532" }}>
                  The ACT Prison: Human Rights Rhetoric Versus Crowded and Bored
                  (2015), Bartels, L.
                </a>
                <br />
                <a
                  href="https://www.ics.act.gov.au/reports-and-publications/thematic-reviews/thematic-reviews/2018-remand-review"
                  style={{ color: "#F26532" }}
                >
                  The care and management of remandees at the Alexander
                  Maconochie Centre (2018)
                </a>
                <br />
                <a
                  href="https://www.ics.act.gov.au/reports-and-publications/healthy-prison-reviews/healthy-prison-reviews/healthy-prison-review-of-the-alexander-maconochie-centre,-2019"
                  style={{ color: "#F26532" }}
                >
                  Healthy Prison Review of the Alexander Maconochie Centre
                  (2019)
                </a>
                <br />
                <a
                  href="https://www.ics.act.gov.au/reports-and-publications/healthy-prison-reviews/healthy-prison-reviews/healthy-prison-review-of-the-alexander-maconochie-centre-2023"
                  style={{ color: "#F26532" }}
                >
                  Healthy Prison Review of the Alexander Maconochie Centre
                  (2022)
                </a>
                <br />
              </div>
            </div>
          </div>

          <div className="cause-card">
            <div className="cause-card__inner">
              <div className="cause-card__content">
                <h3>Standards for Adult Corrections (ACT Report)</h3>
                <br />
                <a href="./pdf/C1.pdf" style={{ color: "#F26532" }}>
                  ACT Standards for Adult Correctional Services (2019)
                </a>
                <br />
              </div>
            </div>
          </div>

          <div className="cause-card">
            <div className="cause-card__inner">
              <div className="cause-card__content">
                <h3>Prisoners and Human Rights </h3>
                <br />
                <a href="./pdf/D1.pdf" style={{ color: "#F26532" }}>
                  Human Rights Act 2004 (ACT)
                </a>
                <br />
                <a href="./pdf/D2.pdf" style={{ color: "#F26532" }}>
                  Human Rights Principles for ACT Correctional Centres (2019),
                  ACT Justice & Community Safety Directorate
                </a>
                <br />
                <a href="./pdf/D3.pdf" style={{ color: "#F26532" }}>
                  United Nations Standard Minimum Rules for the Treatment of
                  Prisoners (the Nelson Mandela Rules) (2016), UN General
                  Assembly
                </a>
                <br />
                <a href="./pdf/D4.pdf" style={{ color: "#F26532" }}>
                  Convention against Torture and Other Cruel, Inhuman or
                  Degrading Treatment or Punishment (CAT) (1987), UN General
                  Assembly
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReportsPage;
