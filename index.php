<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" id="viewport" content="width=device-width">
    <title>PhotOHND</title>
    <meta name="description" content="PhotOHND">
    <meta name="keywords" content="PhotOHND, photoohnd photography, 온동훈, Donghun_ohn, Donghun Ohn, OHNDONGHUN, PHOTOGRAPHY">
    <!-- meta는 방문자에게 보이지 않지만 브라우저에게 html 문서 정보를 전달한다.-->
    <meta property="og:type" content="website">
    <meta property="og:title" content="PhotOHND">
    <meta property="og:description" content="PhotOHND">
    <meta property="og:image" content="내 포트폴리오 로고">
    <!-- ***턱거리마을박물관 로고 이미지로 바꾸기-->
    <meta property="og:url" content="http://PhotOHND.com/">
    <!-- <meta property="og:blabla" content="blblblbl">---(=open graph tag)는 웹 검색에서 사이트가 뜨는데 필요한 정보를 제공한다-->
    <link rel="stylesheet" type="text/css" href="main.css">

</head>

<body>
    <div id="wrap">
        <header>
            <!-- 홈페이지 로고 : pics by @PHOTOHND photography-->
            <a href="index.php">
                <h1>@PHOTOHND photography</h1>
            </a>
        </header>

        <nav>
            <!-- 내비게이션 바 : 6개 카테고리 표시/정방형 6개
            PC : 3열씩 2행
            모바일 : 2열씩 3행 -->
            <?php include 'navibar.php'; ?>

        </nav>

        <section>
            <!-- About
           자기소개 페이지로 연결 -->
            <div class="about_wrap">
                <h2 class="about_title" onclick="aboutClick()">About</h2>
                <div class="about_content" style="display: none;">
                    <?php include "about.php" ?>
                </div>
            </div>

        </section>
        <footer>

            <!-- Contact : 인스타그램, 블로그 연결 아이콘 -->
            <?php include 'contact.php'; ?>

        </footer>

    </div>
    <script src="imgClick.js"></script>
    <script src="aboutClick.js"></script>
</body>

</html>