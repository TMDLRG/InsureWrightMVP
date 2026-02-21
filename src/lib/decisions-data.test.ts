/**
 * TDD Tests for InsureWright MVP Vision — decisions-data.ts
 * Phase A (Red): These tests define the expected structure BEFORE implementation.
 *
 * Expected: 8 categories, 69 decisions across product-level concerns.
 */

import { CATEGORIES, DECISIONS } from "./decisions-data";
import { InputType } from "./types";

// ============================================================
// Category structure tests
// ============================================================

describe("CATEGORIES", () => {
  test("exports exactly 8 categories", () => {
    expect(CATEGORIES).toHaveLength(8);
  });

  test("has correct slugs in order", () => {
    const slugs = CATEGORIES.map((c) => c.slug);
    expect(slugs).toEqual([
      "market-positioning",
      "user-personas-roles",
      "user-flows-workflows",
      "mvp-scope-priorities",
      "sample-artifacts",
      "data-model-configuration",
      "compliance-regulatory",
      "product-success-validation",
    ]);
  });

  test("each category has required fields", () => {
    for (const cat of CATEGORIES) {
      expect(cat.slug).toBeTruthy();
      expect(cat.name).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.icon).toBeTruthy();
      expect(cat.order).toBeGreaterThan(0);
    }
  });

  test("category orders are sequential from 1 to 8", () => {
    const orders = CATEGORIES.map((c) => c.order);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

// ============================================================
// Decision count tests
// ============================================================

describe("DECISIONS", () => {
  test("exports exactly 67 decisions", () => {
    // 8 categories: MKT(8) + USR(10) + FLW(9) + MVP(12) + ART(8) + DAT(8) + REG(6) + VAL(6) = 67
    expect(DECISIONS).toHaveLength(67);
  });

  test("every decision has a unique ID", () => {
    const ids = DECISIONS.map((d) => d.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test("every decision references a valid category slug", () => {
    const validSlugs = new Set(CATEGORIES.map((c) => c.slug));
    for (const d of DECISIONS) {
      expect(validSlugs.has(d.categorySlug)).toBe(true);
    }
  });
});

// ============================================================
// ID prefix convention tests
// ============================================================

describe("Decision ID prefixes", () => {
  const prefixGroups: Record<string, { prefix: string; expectedCount: number }> = {
    "Market & Positioning": { prefix: "MKT-", expectedCount: 8 },
    "User Personas & Roles": { prefix: "USR-", expectedCount: 10 },
    "User Flows & Workflows": { prefix: "FLW-", expectedCount: 9 },
    "MVP Scope & Priorities": { prefix: "MVP-", expectedCount: 12 },
    "Sample Artifacts": { prefix: "ART-", expectedCount: 8 },
    "Data Model & Configuration": { prefix: "DAT-", expectedCount: 8 },
    "Compliance & Regulatory": { prefix: "REG-", expectedCount: 6 },
    "Product Success & Validation": { prefix: "VAL-", expectedCount: 6 },
  };

  for (const [name, { prefix, expectedCount }] of Object.entries(prefixGroups)) {
    test(`${name} has ${expectedCount} decisions with prefix ${prefix}`, () => {
      const matching = DECISIONS.filter((d) => d.id.startsWith(prefix));
      expect(matching).toHaveLength(expectedCount);
    });
  }

  test("all IDs follow one of the expected prefixes", () => {
    const validPrefixes = ["MKT-", "USR-", "FLW-", "MVP-", "ART-", "DAT-", "REG-", "VAL-"];
    for (const d of DECISIONS) {
      const hasValidPrefix = validPrefixes.some((p) => d.id.startsWith(p));
      expect(hasValidPrefix).toBe(true);
    }
  });
});

// ============================================================
// Category-to-slug mapping tests
// ============================================================

describe("Category slug mapping", () => {
  const slugToPrefix: Record<string, string> = {
    "market-positioning": "MKT-",
    "user-personas-roles": "USR-",
    "user-flows-workflows": "FLW-",
    "mvp-scope-priorities": "MVP-",
    "sample-artifacts": "ART-",
    "data-model-configuration": "DAT-",
    "compliance-regulatory": "REG-",
    "product-success-validation": "VAL-",
  };

  for (const [slug, prefix] of Object.entries(slugToPrefix)) {
    test(`decisions in "${slug}" all have prefix "${prefix}"`, () => {
      const catDecisions = DECISIONS.filter((d) => d.categorySlug === slug);
      expect(catDecisions.length).toBeGreaterThan(0);
      for (const d of catDecisions) {
        expect(d.id.startsWith(prefix)).toBe(true);
      }
    });
  }
});

// ============================================================
// Required fields and input type validation
// ============================================================

describe("Decision field validation", () => {
  const validInputTypes: InputType[] = [
    "free_text",
    "rich_text",
    "single_select",
    "multi_select",
    "numeric",
    "yes_no",
    "file_upload",
    "data_table",
  ];

  test("every decision has required fields", () => {
    for (const d of DECISIONS) {
      expect(d.id).toBeTruthy();
      expect(d.categorySlug).toBeTruthy();
      expect(d.title).toBeTruthy();
      expect(d.question).toBeTruthy();
      expect(d.context).toBeTruthy();
      expect(validInputTypes).toContain(d.inputType);
      expect(typeof d.required).toBe("boolean");
      expect(d.order).toBeGreaterThan(0);
    }
  });

  test("every category has at least 1 required decision", () => {
    for (const cat of CATEGORIES) {
      const requiredDecisions = DECISIONS.filter(
        (d) => d.categorySlug === cat.slug && d.required
      );
      expect(requiredDecisions.length).toBeGreaterThanOrEqual(1);
    }
  });

  test("single_select and multi_select decisions have options", () => {
    const selectDecisions = DECISIONS.filter(
      (d) => d.inputType === "single_select" || d.inputType === "multi_select"
    );
    for (const d of selectDecisions) {
      expect(d.options).toBeDefined();
      expect(d.options!.length).toBeGreaterThanOrEqual(2);
      for (const opt of d.options!) {
        expect(opt.value).toBeTruthy();
        expect(opt.label).toBeTruthy();
      }
    }
  });

  test("data_table decisions have tableColumns", () => {
    const tableDecisions = DECISIONS.filter((d) => d.inputType === "data_table");
    for (const d of tableDecisions) {
      expect(d.tableColumns).toBeDefined();
      expect(d.tableColumns!.length).toBeGreaterThanOrEqual(2);
      for (const col of d.tableColumns!) {
        expect(col.key).toBeTruthy();
        expect(col.label).toBeTruthy();
        expect(["text", "number", "select"]).toContain(col.type);
      }
    }
  });

  test("file_upload decisions exist in Sample Artifacts category", () => {
    const fileUploadDecisions = DECISIONS.filter(
      (d) => d.inputType === "file_upload"
    );
    expect(fileUploadDecisions.length).toBeGreaterThanOrEqual(4);
  });
});

// ============================================================
// Branding / constants tests
// ============================================================

describe("App branding", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const constants = require("./constants");

  test("APP_NAME is InsureWright MVP Vision", () => {
    expect(constants.APP_NAME).toBe("InsureWright MVP Vision");
  });

  test("APP_DESCRIPTION references product definition", () => {
    expect(constants.APP_DESCRIPTION.toLowerCase()).toContain("product");
  });
});

// ============================================================
// Specific decision content validation
// ============================================================

describe("Key decision content", () => {
  test("MKT-001 asks about target MGA profile", () => {
    const d = DECISIONS.find((d) => d.id === "MKT-001");
    expect(d).toBeDefined();
    expect(d!.title.toLowerCase()).toContain("target");
    expect(d!.inputType).toBe("free_text");
  });

  test("USR-009 is a data_table for role permissions", () => {
    const d = DECISIONS.find((d) => d.id === "USR-009");
    expect(d).toBeDefined();
    expect(d!.inputType).toBe("data_table");
    expect(d!.tableColumns).toBeDefined();
  });

  test("MVP-001 is multi_select for V1 lines of business", () => {
    const d = DECISIONS.find((d) => d.id === "MVP-001");
    expect(d).toBeDefined();
    expect(d!.inputType).toBe("multi_select");
    expect(d!.options!.length).toBeGreaterThanOrEqual(4);
  });

  test("ART-001 is file_upload for sample broker submissions", () => {
    const d = DECISIONS.find((d) => d.id === "ART-001");
    expect(d).toBeDefined();
    expect(d!.inputType).toBe("file_upload");
  });

  test("DAT-006 is a data_table for terminology differences", () => {
    const d = DECISIONS.find((d) => d.id === "DAT-006");
    expect(d).toBeDefined();
    expect(d!.inputType).toBe("data_table");
  });

  test("REG-001 asks about FCA requirements", () => {
    const d = DECISIONS.find((d) => d.id === "REG-001");
    expect(d).toBeDefined();
    expect(d!.question.toLowerCase()).toContain("fca");
  });

  test("VAL-001 asks about POC success criteria", () => {
    const d = DECISIONS.find((d) => d.id === "VAL-001");
    expect(d).toBeDefined();
    expect(d!.title.toLowerCase()).toContain("success");
  });

  test("MVP-011 asks about pipeline validation", () => {
    const d = DECISIONS.find((d) => d.id === "MVP-011");
    expect(d).toBeDefined();
    expect(d!.title.toLowerCase()).toContain("pipeline");
  });

  test("MVP-012 asks about multi-tenant priorities", () => {
    const d = DECISIONS.find((d) => d.id === "MVP-012");
    expect(d).toBeDefined();
    expect(d!.title.toLowerCase()).toContain("multi-tenant");
  });
});
