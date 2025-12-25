import React from "react";

const cityColumns = [
  [
    "Packers and Movers in Jodhpur",
    "Packers and Movers Ahmedabad",
    "Packers and Movers in Rajkot",
    "Packers and Movers in Surat",
    "Packers and Movers in Mumbai",
    "Packers and Movers in Thane",
    "Packers and Movers in Palanpur",
    "Packers and Movers in Pune",
  ],
  [
    "Packers and Movers in Nashik",
    "Packers and Movers in Goa",
    "Packers and Movers in Bangalore",
    "Packers and Movers in Assam",
    "Packers and Movers in Chennai",
    "Packers and Movers in Hyderabad",
    "Packers and Movers in Coimbatore",
    "Packers and Movers in Ujjain",
  ],
  [
    "Packers and Movers in Patna",
    "Packers and Movers in Kolkata",
    "Packers and Movers in Odisha",
    "Packers and Movers in Nagpur",
    "Packers and Movers in Ajmer",
    "Packers and Movers in Lucknow",
    "Packers and Movers Aurangabad",
    "Packers and Movers in Jaipur",
  ],
  [
    "Packers and Movers in Jammu",
    "Packers and Movers in Srinagar",
    "Packers and Movers in Chandigarh",
    "Packers and Movers in Amritsar",
    "Packers and Movers in Delhi",
    "Packers and Movers in Noida",
    "Packers and Movers in Ghaziabad",
    "Packers and Movers in Faridabad",
  ],
];

const OurNetwork = () => {
  return (
    <section
      className="py-5 text-dark"
      style={{
        background: "url(/assets/img/Map.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Our Network
          </span>

          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Packers and Movers In All India
          </h2>
        </div>
        <div className="row our-network">
          {cityColumns.map((column, colIndex) => (
            <div key={colIndex} className="col-xl-3 col-lg-6 col-md-6 mb-4">
              <ul className="list-unstyled">
                {column.map((city, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" className="text-dark">
                      <i
                        className="fas fa-map-marker-alt me-2"
                        style={{ color: "var(--theme)" }}
                      ></i>

                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
