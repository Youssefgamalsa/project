// import { useState } from "react";
import axios from "axios";
import "../../App.css";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [change, setChange] = useState(false);
  const [citys, setCitys] = useState([]);

  /*  get citys for kuwait */
  const getcities = async () => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          country: "kuwait",
        }
      );
      setCitys(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getcities();
  }, []);
  return (
    <>
      <div className="landing-container">
        {/* Hero Section */}
        <header className="hero overflow-hidden w-full bg-gray-100 p-4 ">
          <div className="hero-content">
            <h1 className="animate-marquee text-lg font-bold text-red-600 whitespace-nowrap">
              عدد المقاعد المتبقيه محدود جدا <br /> بادر بحجز مقعدك الان
            </h1>
            <h2 className=""> الاشتراك الشهرى : 25 دينار </h2>
            <button className="cta-button"> اشترك الان </button>
          </div>
        </header>

        {/* Search Form */}
        <section className="search-section">
          <div className="search-box">
            <h2> اشترك الان </h2>
            <form className="search-form">
              <input type="text" placeholder="الاسم ثلاثى" />
              <input type="number" placeholder="00" />
              <input type="email" placeholder="yjeoe0@gmail.com" />
              <p className=""> نوع الجنس </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "4px",
                }}
              >
                <label htmlFor="male"> ذكر </label>
                <input type="radio" value={"male"} id="male" name="type" />
                <label htmlFor="female"> انثى </label>
                <input type="radio" value={"female"} id="female" name="type" />
              </div>
              <p className=""> اختر الرحله </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "4px",
                }}
              >
                <label htmlFor="go"> ذهاب </label>
                <input type="radio" value={"male"} id="go" name="journey" />

                <label htmlFor="back"> ذهاب و عوده </label>
                <input
                  type="radio"
                  value={"female"}
                  id="back"
                  name="journey"
                  onChange={() => setChange(true)}
                />
              </div>
              <label style={{ textAlign: "right" }}>موعد رحله الذهاب </label>
              <input type="date" />
              <label htmlFor="cities" style={{ textAlign: "right" }}>
                {" "}
                مدينه الذهاب{" "}
              </label>
              <select className="form-select" id="cities">
                {citys.map((city, index) => (
                  <option value="2" key={index}>
                    {city}
                  </option>
                ))}
              </select>

              {change ? (
                <>
                  <label style={{ textAlign: "right" }}>
                    {" "}
                    موعد رحله العوده{" "}
                  </label>
                  <input type="date" />
                  <label style={{ textAlign: "right" }}>مدينه العوده </label>
                  <select className="form-select" id="cities">
                    {citys.map((city, index) => (
                      <option value="2" key={index}>
                        {city}
                      </option>
                    ))}
                  </select>{" "}
                </>
              ) : (
                ""
              )}
              <button type="submit"> اشترك الان </button>
            </form>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Easy Booking</h3>
              <p>Quick & hassle-free train reservations.</p>
            </div>
            <div className="feature-card">
              <h3>Secure Payments</h3>
              <p>Multiple payment options with full security.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Our team is here to help anytime.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Train Reservation | Contact: support@trainbooking.com</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
