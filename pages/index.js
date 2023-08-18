import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import corazones from "../animations/corazones";
import corazondraw from "../animations/corazondraw";
import cocina from "../animations/cocina.json";
import cancha from "../animations/cancha.json";
import pelicula from "../animations/pelicula.json";
import date from "../animations/date.json";
import Image from "next/image";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isClikedOne, setIsClickedOne] = useState(false);
  const [isCena, setIsCena] = useState("");
  const [isVisit, setIsVisit] = useState("");
  const [isMovie, setIsMovie] = useState("");
  const [isWhere, setIsWhere] = useState("");
  const imageUrl =
    "https://res.cloudinary.com/djk4q3tys/image/upload/v1692339322/sc9lhpaxfdwbeak3msb1.png";

  const handleDownload = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "my_image.jpg";
    link.click();

    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    gsap.to(".divsofi", { opacity: 1 });
  }, [gsap]);

  useEffect(() => {
    isClikedOne && gsap.to(".divsofi", { opacity: 0 });
    isClikedOne && gsap.to(".divsofi", { display: "none" });
  }, [isClikedOne]);

  useEffect(() => {
    isCena.length > 3 && isCena == "torta" && gsap.to(".cena", { opacity: 0 });
    isCena.length > 3 &&
      isCena == "torta" &&
      gsap.to(".cena", { display: "none" });
    isCena.length > 3 &&
      isCena == "torta" &&
      gsap.to(".cenarespuesta", { opacity: 1, delay: 1 });
    isCena == "torta" && gsap.to(".cenarespuesta", { opacity: 0, delay: 3 });
    isCena == "torta" &&
      gsap.to(".cenarespuesta", { display: "none", delay: 3.5 });
    isCena == "torta" && gsap.to(".cancha", { opacity: 1, delay: 4.3 });
  }, [isCena]);

  useEffect(() => {
    isVisit.length > 3 &&
      isVisit == "racing" &&
      gsap.to(".cancha", { opacity: 0 });
    isVisit == "racing" && gsap.to(".cancha", { display: "none", delay: 0.5 });
    isVisit == "racing" &&
      gsap.to(".cancharespuesta", { opacity: 1, delay: 1 });
    isVisit == "racing" &&
      gsap.to(".cancharespuesta", { opacity: 0, delay: 3.5 });
    isVisit == "racing" &&
      gsap.to(".cancharespuesta", { display: "none", delay: 3.6 });

    isVisit == "racing" && gsap.to(".cine", { opacity: 1, delay: 4.3 });
  }, [isVisit]);

  useEffect(() => {
    isMovie.length > 3 &&
      isMovie == "ninguna" &&
      gsap.to(".cine", { opacity: 0 });
    isMovie == "ninguna" && gsap.to(".cine", { display: "none", delay: 0.5 });

    isMovie == "ninguna" && gsap.to(".cinerespuesta", { opacity: 1, delay: 1 });

    isMovie == "ninguna" &&
      gsap.to(".cinerespuesta", { opacity: 0, delay: 3.5 });

    isMovie == "ninguna" &&
      gsap.to(".cinerespuesta", { display: "none", delay: 3.6 });

    isMovie == "ninguna" && gsap.to(".cita", { opacity: 1, delay: 4.3 });
  }, [isMovie]);

  useEffect(() => {
    isWhere.length > 3 &&
      isMovie == "veneciana" &&
      gsap.to(".cita", { opacity: 0 });
    isWhere == "veneciana" && gsap.to(".cita", { display: "none", delay: 0.5 });

    isWhere == "veneciana" &&
      gsap.to(".citarespuesta", { opacity: 1, delay: 1 });

    isWhere == "veneciana" &&
      gsap.to(".citarespuesta", { opacity: 0, delay: 3.5 });

    isWhere == "veneciana" &&
      gsap.to(".citarespuesta", { display: "none", delay: 3.6 });

    isWhere == "veneciana" && gsap.to(".final", { opacity: 1, delay: 4.3 });
  }, [isWhere]);

  return (
    <>
      <Box className="divsofi">
        <Box
          display={"flex"}
          justifyContent={"center"}
          justifySelf={"start"}
          flexDirection={"column"}
          width={"100vw"}
          sx={{ my: 7, opacity: 0 }}
          className="divsofi"
          height={"fit-content"}
        >
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="body1"
            sx={{ fontFamily: "Lato", fontSize: "15px" }}
          >
            Desde los momentos geniales hasta los tensos,
            <br /> cada día con vos fue increíble. <br />{" "}
            <span style={{ fontWeight: 600 }}>Gracias</span> por ser mi
            compañera en todo.
            <br /> ¡Sigamos{" "}
            <span style={{ fontWeight: 600 }}>
              creciendo
              <br /> y disfrutando juntos
            </span>{" "}
            de cada momento! 💖
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{ justifySelf: "center",position:'relative', bottom:100,height:'100vh' }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            className="divsofi"
          >
            <Box
              sx={{ position: "absolute", zIndex: "-2", opacity: 0 }}
              className="divsofi"
            >
              <Lottie animationData={corazones} loop={true} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ opacity: 0 }}
              className="divsofi"
            >
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => setIsClickedOne(true)}
                className="divsofi"
              >
                COMENZAR{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
        justifyContent={"center"}
        className="cena"
      >
        <Lottie animationData={cocina} loop={true} />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Lato",
            textAlign: "center",
            my: 3,
            fontSize: "30px",
          }}
          className="cena"
        >
          Qué me cocinaste<br/> primero?
        </Typography>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              setIsCena("torta");
            }}
          >
            Torta
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              alert("Pensa bien");
            }}
          >
            Fideos con crema
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"start"}
        className="cenarespuesta"
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          Me cocinaste una torta -con ayuda de Lore- <br /> que disfruto más mi
          familia
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/torta.png" alt="" width={300} height={300} />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          Te amo
          <br /> yo tambien comi y estaba riquisima,
          <br /> me mataste de ternura
        </Typography>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"center"}
        className="cancha"
      >
        <Lottie animationData={cancha} loop={true} />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Lato",
            textAlign: "center",
            my: 3,
            fontSize: "30px",
          }}
        >
          Qué cancha<br/>visitamos primero?
        </Typography>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setIsVisit("racing")}
          >
            Cancha de Racing
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => alert("Pensa bien")}
          >
            Cancha de Gimnasia
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"start"}
        className="cancharespuesta"
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          Fuimos el 5/7 a la de Racing y el 7/7 a la de Gimnasia{" "}
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/racing.png" alt="" width={200} height={200} />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/gimnasia.png" alt="" width={200} height={200} />
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"center"}
        className="cine"
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Box display={"flex"} justifyContent={"center"} sx={{ width: "50%" }}>
            <Lottie animationData={pelicula} loop={true} />
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Lato",
            textAlign: "center",
            fontSize: "30px",
            lineHeight: "30px",
            my: 3,
          }}
        >
          Qué película<br/> vimos completa?
        </Typography>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => alert("Pensa bien")}
          >
            As above so below{" "}
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => alert("Pensa bien")}
          >
            A dogs purpose
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => alert("Pensa bien")}
          >
            Oppenheimer
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setIsMovie("ninguna")}
          >
            Ninguna
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"start"}
        className="cinerespuesta"
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          Ninguna, siempre alguno se durmio antes
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/movies.png" alt="" width={300} height={300} />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          O terminamos haciendo otras cosas..
        </Typography>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"center"}
        className="cita"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            bottom: 150,
          }}
          alignSelf={"start"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "80%",
              position: "relative",
            }}
          >
            <Lottie animationData={date} loop={true} />
          </Box>
        </Box>
        <Box sx={{ position: "relative", bottom: 200 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Lato",
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "30px",
              mb: 5,
            }}
          >
            Dónde fue nuestra primer beso?
          </Typography>
          <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => alert("Pensa bien")}
            >
              Trade Sky
            </Button>
          </Box>
          <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setIsWhere("veneciana")}
            >
              La veneciana
            </Button>
          </Box>
          <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => alert("Pensa bien")}
            >
              Parque de Lomas
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        justifyContent={"start"}
        className="citarespuesta"
      >
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lato", textAlign: "center", my: 4 }}
        >
          Siempre disfruto compartiendo momentos con vos
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/cita1.png" alt="" width={200} height={200} />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src="/cita2.png" alt="" width={200} height={200} />
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",

          opacity: 0,
        }}
        className="final"
        justifyContent={"start"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Lato",
              textAlign: "center",
              mt: 4,
              fontSize: "20px",
            }}
          >
            Te amo Sofi W
          </Typography>
          <Box display={"flex"} alignItems={"end"} sx={{ mx: 1 }}>
            <FavoriteIcon sx={{ color: "#09446a" }} />
            <FavoriteBorderIcon sx={{ color: "#09446a" }} />
            <FavoriteIcon sx={{ color: "#09446a" }} />
            <FavoriteBorderIcon sx={{ color: "#09446a" }} />
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Lato",
            textAlign: "center",
            mt: 4,
            fontSize: "20px",
          }}
        >
          Gracias por ser mi compañera,
          <br /> mi ejemplo y mi motivación,
        </Typography>
        <Lottie animationData={corazondraw} loop={true} />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Lato",
            textAlign: "center",
            fontSize: "15px",
            mx: 2,
            zIndex: 2,
          }}
        >
          Este primer mes estuvo lleno de aprendizaje, cariño y
          tensiones, pero nunca dudando el respeto y amor que nos tenemos. Todavía nos queda mucho por vivir
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            alt=""
            src={"/cupon.png"}
            width={300}
            height={300}
            style={{ zIndex: -2, position: "relative", bottom: 40 }}
          />
        </Box>
      </Box>
    </>
  );
}
