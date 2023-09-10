const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.get("/", (req, res) => res.type('html').send(html));

app.post("/Message", (req, res) => {
    console.log(JSON.stringify(req.body));

    if (!req.body.name || !req.body.email || !req.body.message) {
        res.send("Missing Fields");
        return;
    }

    fnSendEmail(req, res);

});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ygt.isimuhendislik@gmail.com',
        pass: 'tqqtxjouvfoxowsv'
    }
});


function fnSendEmail(req, res) {
    try {

        const mailOptions = {
            from: 'ygt.isimuhendislik@gmail.com',
            to: 'ygt.isimuhendislik@gmail.com',
            subject: 'Web Message',
            text: "Email: " + req.body.email + " \nSubject: Teklif \nMessage: " + req.body.message+" \nAd: " +req.body.name+" \nTel: " +req.body.phone,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                // do something useful
                res.send({ rsltCd: "Success", rsltMsg: "Captcha token can not be verified", rsltClntMsg: "Robot do?rulamas? yap?lamad?.", rsltTyp: "Error" });
            }
        });

    } catch (e) {
        res.send({ rsltCd: "Fail", rsltMsg: "Captcha token can not be verified", rsltClntMsg: "Robot do?rulamas? yap?lamad?.", rsltTyp: "Error" });
    }
}

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>YGTISI-Elektrik, Otomasyon, Mühendislik</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <!--<link href="img/favicon.ico" rel="icon">-->

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-dark p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Tepekule Mh. 2084/8 Sk. No:73/E Bayraklı/İZMİR</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Hergün : 7/24</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>GSM: 0532 100 04 97</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <!--<a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-linkedin-in"></i></a>-->
                    <a class="btn btn-square btn-link rounded-0" href="https://instagram.com/ygtisi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" ><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="/" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
			<img style="height:70px" src="img/logo2.jpg"> </img>
            <!-- <h2 class="m-0 text-primary">YGT ISI</h2> -->
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link active">Anasayfa</a>
                <a href="about.html" class="nav-item nav-link">Hakkımızda</a>
                <a href="service.html" class="nav-item nav-link">Servİs</a>
                <a href="project.html" class="nav-item nav-link">Projeler</a>
                <!--<div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="feature.html" class="dropdown-item">Feature</a>
                        <a href="quote.html" class="dropdown-item">Free Quote</a>
                        <a href="team.html" class="dropdown-item">Our Team</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>-->
                <a href="contact.html" class="nav-item nav-link">İletİŞİm</a>
            </div>
            <a href="#quote" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">TEKLİF AL<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Carousel Start -->
    <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative" data-dot="<img src='img/c1.jpg'>">
                <img class="img-fluid" src="img/c1.jpg" alt="">
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h1 class="display-2 text-white animated slideInDown">Doğalgaz Isı Dönüşümleri</h1>
                                <p class="fs-5 fw-medium text-white mb-4 pb-3">Okullar, İş yerleri, Hastaneler,  Fabrikalar için doğalgaz ısı dönüşüm sistemlerinin kurulumu, bakım-onarımı</p>
                                <!--<a href="" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-carousel-item position-relative" data-dot="<img src='img/c2.jpg'>">
                <img class="img-fluid" src="img/c2.jpg" alt="">
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h1 class="display-2 text-white animated slideInDown">Otomasyon</h1>
                                <p class="fs-5 fw-medium text-white mb-4 pb-3">Doğalgaz ısı dönüşüm projelerinde anahtar teslim sistemler</p>
                                <!--<a href="" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-carousel-item position-relative" data-dot="<img src='img/c3.jpg'>">
                <img class="img-fluid" src="img/c3.jpg" alt="">
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h1 class="display-2 text-white animated slideInDown">Mühendislik</h1>
                                <p class="fs-5 fw-medium text-white mb-4 pb-3">Doğalgaz ısı dönüşüm sistemleri projelendirme, kurulum ve teknik destek</p>
                                <!--<a href="" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Carousel End -->


    <!-- Feature Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-users text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">451</h1>
                    </div>
                    <h5 class="mb-3">Mutlu Müşteri</h5>
                    <!--<span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>-->
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">234</h1>
                    </div>
                    <h5 class="mb-3">Tamamlanan Proje</h5>
                    <!--<span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>-->
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">22</h1>
                    </div>
                    <h5 class="mb-3">Yıllık Tecrübe</h5>
                    <!--<span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>-->
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">7/24</h1>
                    </div>
                    <h5 class="mb-3">Teknik Destek</h5>
                    <!--<span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>-->
                </div>
            </div>
        </div>
    </div>
    <!-- Feature Start -->


    <!-- About Start -->
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-2">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/a1.jpg" style="object-fit: cover;" alt="">
                    </div>
                </div>
                <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-primary">Hakkımızda</h6>
                        <h1 class="mb-4">+22 Yıllık Doğalgaz ve Isı Dönüşüm Sistemleri Kurulum ve Destek Tecrübesi</h1>
                        <p>
                            Şirketimiz Doğalgaz brülörleri, Sıcak su kazanları kurulumu, montajı ve periodik bakım hizmetleri; arıza teknik servisi; kazan otomasyonu ve devreye alma gibi konularda sizlere hizmet vermekteyiz.
                            İhtiyaca özgü mühendislik-otomasyon çözümleri sunmaktayız.
                        </p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>Kaliteli Hizmet</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>Periodik Bakım</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>%100 Müşteri Memnuniyeti</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>Anahtar Teslim Mühendislik Hizmeti</p>
                        <a href="" class="btn btn-primary rounded-pill py-3 px-5 mt-3">Daha fazla</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-primary">Hizmetlerimiz</h6>
                <h1 class="mb-4">Kalite odaklı, müşteri memnuniyeti garantili</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s1.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-fire fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Brülör Bakım</h4>
                            <p>Brülör a dan z ye periodik bakımları</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s2.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wrench fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Kazan Bakım</h4>
                            <p>Kazan tadilatları, bakımı ve değişimleri hizmeti</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s3.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-industry fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Baca Gazı Analiz Ölçümü</h4>
                            <p>Tüm ısı sistemleri baca gazı analizi hizmeti</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s4.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-search fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Arıza Tespit</h4>
                            <p>Isı Sistemleri kaynaklı tüm arıza tespiti hizmeti</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s5.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-phone fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Teknik Destek</h4>
                            <p>7/24 Teknik destek ve garanti hizmeti</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/s6.jpg" alt="">
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-bolt fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Mühendislik-Otomasyon</h4>
                            <p>İhtiyaca özgü çözümler</p>
                            <a class="small fw-medium" href="">Daha fazla<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->


    <!-- Feature Start -->
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-2">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h6 class="text-primary">Neden Bizi Tercih Etmelisiniz!</h6>
                        <h1 class="mb-4">YGT ISI ELEKTRİK OTOMASYON MÜHENDİSLİK</h1>
                        <p class="mb-4 pb-2">Alanında uzman kadro, yıllara dayanan tecrübe ve müşteri memnuniyeti odaklı hizmet anlayışımızla sizlere hizmet sunmaktayız.</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Kaliteli</p>
                                        <h5 class="mb-0">Hizmet</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-user-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Uzman</p>
                                        <h5 class="mb-0">Ekip</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Ücretsiz</p>
                                        <h5 class="mb-0">Teklif</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-headphones text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">7/24</p>
                                        <h5 class="mb-0">Teknik Servis</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/f1.jpg" style="object-fit: cover;" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature End -->


    <!-- Projects Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-primary">Projelerimiz</h6>
                <h1 class="mb-4">Son Yapılan Projelerden Örnekler</h1>
            </div>
            <!--<div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                <div class="col-12 text-center">
                    <ul class="list-inline mb-5" id="portfolio-flters">
                        <li class="mx-2 active" data-filter="*">All</li>
                        <li class="mx-2" data-filter=".first">Solar Panels</li>
                        <li class="mx-2" data-filter=".second">Wind Turbines</li>
                        <li class="mx-2" data-filter=".third">Hydropower Plants</li>
                    </ul>
                </div>
            </div>-->
            <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="rounded overflow-hidden">
                        <img class="img-fluid" src="img/p1.jpg" alt="">
                        <!--<div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-6.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Brülör Değişimi</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second">
                    <div class="rounded overflow-hidden">
                        <img class="img-fluid" src="img/p2.jpg" alt="">
                        <!--<div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-5.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Baca Gaz Analizi</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item third">
                    <div class="rounded overflow-hidden">
                        <img class="img-fluid" src="img/p3.jpg" alt="">
                        <!--<div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-4.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Hava Prosestadı Parça Değişimi</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="rounded overflow-hidden">
                        <img class="img-fluid" src="img/p4.jpg" alt="">
                        <!--<div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-3.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Kazan-Tesisat Yenileme</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second">
                    <div class="rounded overflow-hidden">
                        <!--portfolio-img-->
                        <img class="img-fluid" src="img/p5.jpg" alt="">
                        <!--<div class="portfolio-btn">
        <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-2.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
        <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
    </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Periodik Bakım</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item third">
                    <div class="rounded overflow-hidden">
                        <img class="img-fluid" src="img/p6.jpg" alt="">
                        <!--<div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="imgimg-600x400-1.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>-->
                    </div>
                    <div class="pt-3">
                        <p class="text-primary mb-0">Mevsimlik Bakım</p>
                        <hr class="text-primary w-25 my-2">
                        <!--<h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Projects End -->


    <!-- Quote Start -->
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-2" id="quote">
        <div class="container quote px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/q1.jpg" style="object-fit: cover;" alt="">
                    </div>
                </div>
                <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-primary">7/24 Hızlı</h6>
                        <h1 class="mb-4">Teklif Al</h1>
                        <p class="mb-4 pb-2">Projenizi, projenizde kullanmak istediğiniz ekipmanları detaylandırın, size uygun en iyi çözümlerimizi fiyatlandıralım</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-12">
                                    <input type="text" class="form-control border-4" placeholder="Adınız" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-12">
                                    <input type="email" class="form-control border-4" placeholder="Email" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-12">
                                    <input type="text" class="form-control border-4" placeholder="Telefon" style="height: 55px;">
                                </div>
                                <!--<div class="col-12 col-sm-6">
                                    <select class="form-select border-0" style="height: 55px;">
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>-->
                                <div class="col-12">
                                    <textarea class="form-control border-4" placeholder="Notlar" rows="3"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Gönder</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Quote End -->


    <!-- Team Start -->
    <!--<div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-primary">Team Member</h6>
                <h1 class="mb-4">Experienced Team Members</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-1.jpg" alt="">
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-2.jpg" alt="">
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-3.jpg" alt="">
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- Team End -->


    <!-- Testimonial Start -->
    <!--<div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-primary">Testimonial</h6>
                <h1 class="mb-4">What Our Clients Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg">
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg">
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg">
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- Testimonial End -->


    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-4">Adres</h5>
                    <p class="mb-2">
                        <i class="fa fa-map-marker-alt me-3"></i>Tepekule Mh. 2084/8 Sk. No:73/E Bayraklı/İZMİR
                    </p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>GSM: 0532 100 04 97</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>ygt.isimuhendislik@gmail.com</p>
                    <div class="d-flex pt-2">
                        <!--<a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>-->
                        <a class="btn btn-square btn-outline-light btn-social" href="https://instagram.com/ygtisi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <!--<div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">Support</a>
                </div>-->
                <!--<div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-4">Project Gallery</h5>
                    <div class="row g-2">
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-1.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-2.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-3.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-4.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-5.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="img/gallery-6.jpg" alt="">
                        </div>
                    </div>
                </div>-->
                <!--<div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>-->
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">YGTISI</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a href="https://htmlcodex.com" target="_blank">HTML Codex</a>
                        <br>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
</body>

</html>
`
