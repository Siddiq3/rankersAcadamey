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
      "ధన్యవాదాలు. ఇది ప్రస్తుతం frontend demo form మాత్రమే. దయచేసి 9676356670 లేదా 9885269211 కి కాల్ చేసి మీ enquiry ని confirm చేయండి."
    );
    setForm(initialState);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Field
        name="parentName"
        onChange={handleChange}
        placeholder="Parent name / తల్లి లేదా తండ్రి పేరు"
        required
        value={form.parentName}
      />
      <Field
        name="phone"
        onChange={handleChange}
        placeholder="Phone number / మొబైల్ నంబర్"
        required
        value={form.phone}
      />
      <Field
        name="studentName"
        onChange={handleChange}
        placeholder="Student name / విద్యార్థి పేరు"
        value={form.studentName}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          name="className"
          onChange={handleChange}
          placeholder="Class / తరగతి"
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
        మీ వివరాలు పంపిన తర్వాత మా టీమ్ కాల్ ద్వారా సంప్రదించవచ్చు. అవసరమైతే తరువాత WhatsApp లేదా backend integration సులభంగా జోడించవచ్చు.
      </p>
    </form>
  );
}

function Field(props) {
  return <input className="form-input" {...props} />;
}
