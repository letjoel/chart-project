/// <reference types="cypress" />

describe("First Render", () => {
  it("should render", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Charts");
  });
});

describe("Chart Canvas qty", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Should have three canvas", () => {
    cy.get("canvas").should("have.length", 3);
  });
});

describe("Chart Lines", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Should have a line chart", () => {
    cy.get("#line-chart").should("exist");
  });
});

describe("Chart Bars", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Should have a bar chart", () => {
    cy.get("#bar-chart").should("exist");
  });
});

describe("Chart Pie", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Should have a pie chart", () => {
    cy.get("#pie-chart").should("exist");
    cy.get("canvas").should("exist");
  });
});
