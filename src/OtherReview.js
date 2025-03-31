import BackButtonPage from "./BackButtonPage";

const OtherReview = () => {
  const averageReview = 4; // กำหนดค่าเริ่มต้นให้กับคะแนนรีวิว

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <BackButtonPage
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="wonder.png"
          alt="wonder"
          style={{
            width: 160,
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "50%",
          }}
        />
        <p
          style={{
            color: "#FFFFFF",
            fontFamily: "Prompt",
            fontSize: 32,
            fontWeight: 700,
            margin: 8,
          }}
        >
          นางสมร
        </p>

        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{
                color: index < averageReview ? "#FFD700" : "#D3D3D3",
                fontSize: 24,
              }}
            >
              ★
            </span>
          ))}
        </div>

        <p
          style={{
            color: "#FFFFFF",
            fontFamily: "Prompt",
            fontSize: 16,
            fontWeight: 600,
            marginTop: 32,
          }}
        >
          ประวัติการทำงานและรีวิว
        </p>

        <div
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
            width: "80%",
            maxWidth: 500,
            padding: 16,
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="technician.png"
              alt="technician"
              style={{
                width: 56,
                height: "auto",
                borderRadius: "50%",
                margin: 6,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // ทำให้เนื้อหาชิดซ้าย
              }}
            >
              <p
                style={{
                  color: "black",
                  fontSize: 16,
                  margin: 0, // เอา margin ออกให้ชิดซ้าย
                  lineHeight: 1.2, // ปรับให้ไม่ติดกันเกินไป
                }}
              >
                นายตะวัน
              </p>
              <div
                style={{
                  color: "black",
                  lineHeight: 1.2, // ปรับให้ดูดีขึ้น
                }}
                className="star-rating"
              >
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < averageReview ? "#FFD700" : "#D3D3D3",
                      fontSize: 24,
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "Prompt",
              fontSize: 16,
              marginLeft: 8,
              textAlign: "left", // ชิดซ้าย
            }}
          >
            ทำงานดี สะอาดเรียบร้อย เก็บงานได้ดีครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherReview;
