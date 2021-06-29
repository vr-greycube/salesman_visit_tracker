// Copyright (c) 2021, Greycube and contributors
// For license information, please see license.txt

frappe.ui.form.on("Customer Visit Plan", {
  setup: function (frm) {
    frm.fields_dict["customer_visit_plan_detail"].grid.get_field(
      "contact"
    ).get_query = function (doc, cdt, cdn) {
      let d = locals[cdt][cdn];
      return {
        query:
          "salesman_visit_tracker.salesman_visit_tracker.doctype.customer_visit_plan.customer_visit_plan.get_customer_contacts",
        filters: { customer: d.customer },
      };
    };
  },
});
