import React, { useState } from "react";

const initialState = {
  parentName: "",
  phone: "",
  studentName: "",
  className: "",
  programme: "Navodaya Coaching",
};

export default function LeadForm({ submitLabel = "Submit Enquiry" }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Thanks! This demo form is saved only in the UI. Please call Rankers Academy at 9676356670 or 9885269211 to confirm your enquiry."
    );
    setForm(initialState);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Field
        name="parentName"
        onChange={handleChange}
        placeholder="Parent name"
        required
        value={form.parentName}
      />
      <Field
        name="phone"
        onChange={handleChange}
        placeholder="Phone number"
        required
        value={form.phone}
      />
      <Field
        name="studentName"
        onChange={handleChange}
        placeholder="Student name"
        value={form.studentName}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          name="className"
          onChange={handleChange}
          placeholder="Class"
          value={form.className}
        />
        <select
          className="form-input"
          name="programme"
          onChange={handleChange}
          value={form.programme}
        >
          <option>Navodaya Coaching</option>
          <option>Sainik School Coaching</option>
          <option>RMS Coaching</option>
        </select>
      </div>

      <button className="btn-primary w-full justify-center" type="submit">
        <span className="relative z-10">{submitLabel}</span>
      </button>

      <p className="text-xs leading-6 text-brand-slate">
        This form keeps the current frontend-only business logic intact and is ready to connect to WhatsApp, Google
        Sheets or a backend later.
      </p>
    </form>
  );
}

function Field(props) {
  return <input className="form-input" {...props} />;
}
