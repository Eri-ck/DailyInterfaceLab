const plans = [
  {
    name: "Starter",
    price: "$9",
    color: "#9ca3af",
    recommended: false,
    features: ["1 Project", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29",
    color: "#f97316",
    recommended: true,
    features: ["10 Projects", "Advanced Analytics", "Priority Support"],
  },
  {
    name: "Studio",
    price: "$99",
    color: "#111111",
    recommended: false,
    features: ["Unlimited Projects", "Team Access", "Dedicated Support"],
  },
];

function Feature({ text }) {
  return (
    <li
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      {text}
    </li>
  );
}

function PlanCard({ name, price, features, recommended, color }) {
  return (
    <article
      style={{
        background: "#fff",
        border: `2px solid ${color}`,
        borderRadius: "20px",
        padding: "24px",
        position: "relative",
        transition: "all .25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {recommended && (
        <span
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: color,
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Recommended
        </span>
      )}

      <h3
        style={{
          color,
          marginTop: 0,
          marginBottom: "12px",
        }}
      >
        {name}
      </h3>

      <div
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color,
          marginBottom: "24px",
        }}
      >
        {price}
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginBottom: "24px",
        }}
      >
        {features.map((feature) => (
          <Feature key={feature} text={feature} />
        ))}
      </ul>

      <button
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          background: color,
          color: "#fff",
          fontWeight: "600",
          transition: "all .2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        Choose Plan
      </button>
    </article>
  );
}

export default function PricingCards() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "20px",
      }}
    >
      {plans.map((plan) => (
        <PlanCard key={plan.name} {...plan} />
      ))}
    </section>
  );
}
