const teamsData = [
    {
        "teamName": "CHENNAI SUPER KINGS",
        "shortName": "CSK",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
    },
    {
        "teamName": "ROYAL CHALLENGERS BANGALORE",
        "shortName": "RCB",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png"
    },
    {
        "teamName": "DELHI CAPITALS",
        "shortName": "DC",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png"
    },
    {
        "teamName": "GUJARAT TITANS",
        "shortName": "GT",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Logooutline/GToutline.png"
    },
    {
        "teamName": "KOLKATA KNIGHT RIDERS",
        "shortName": "KKR",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"
    },
    {
        "teamName": "LUCKNOW SUPER GIANTS",
        "shortName": "LSG",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Logooutline/LSGoutline.png"
    },
    {
        "teamName": "MUMBAI INDIANS",
        "shortName": "MI",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png"
    },
    {
        "teamName": "PUNJAB KINGS",
        "shortName": "PK",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png"
    },
    {
        "teamName": "RAJASTHAN ROYALS",
        "shortName": "RR",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png"
    },
    {
        "teamName": "SUNRISERS HYDERABAD",
        "shortName": "SRH",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Logooutline/SRHoutline.png"
    }
];

const CSKplayers = [
    {
        "id": 1,
        "playerName": "MS DHONI",
        "from": "CSK",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "WICKET-KEEPER(C)",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/MS-Dohni.png"
    },
    {
        "id": 2,
        "playerName": "RUTURAJ GAIKWAD",
        "from": "CSK",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "BATTER",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Ruturaj-Gaikwad.png"
    },
    {
        "id": 3,
        "playerName": "DEVON CONWAY",
        "from": "CSK",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "BATTER",
        "photoUrl": "https://www.sakshi.com/sites/default/files/special/ipl/2022/teams/csk/Devonconway.png"
    },
    {
        "id": 4,
        "playerName": "AJINKYA RAHANE",
        "from": "CSK",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "BATTER",
        "photoUrl": "https://www.sakshi.com/sites/default/files/special/ipl/2022/teams/csk/AjinkyaRahane.png"
    },
    {
        "id": 5,
        "playerName": "DEEPAK CHAHAR",
        "from": "CSK",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Deepak-Chahar.png"
    },
    {
        "id": 6,
        "playerName": "TUSHAR DESHPANDE",
        "from": "CSK",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/539.png"
    },
    {
        "id": 7,
        "playerName": "MATHEESHA PATHIRANA",
        "from": "CSK",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1014.png"
    },
    {
        "id": 8,
        "playerName": "RAVINDRA JADEJA",
        "from": "CSK",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://scores.iplt20.com/ipl/playerimages/Ravindra%20Jadeja.png"
    },
    {
        "id": 9,
        "playerName": "MOEEN ALI",
        "from": "CSK",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://cricclubs.com/documentsRep/profilePics/01e46848-038c-4f93-a950-ccd5ff947103.png"
    },
    {
        "id": 10,
        "playerName": "MITCHELL SANTNER",
        "from": "CSK",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.sakshi.com/sites/default/files/special/ipl/2022/teams/csk/Mitchellsantner.png"
    },
    {
        "id": 11,
        "playerName": "SHIVAM DUBE",
        "from": "CSK",
        "price": "3.5 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png"
    },
    {
        "id": 12,
        "playerName": "MAHEESH THEEKSHNA",
        "from": "CSK",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://assets.mspimages.in/gear/wp-content/uploads/2023/03/maheesh-theekshana.png?is-pending-load=1"
    }
];

const RCBplayers = [
    {
        "id": 1,
        "playerName": "Virat Kohli(C)",
        "from": "RCB",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/virat%20kohli%20RCB.png?itok=XnicAj5P"
    },
    {
        "id": 2,
        "playerName": "FAF DU PLESSIS",
        "from": "RCB",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/faf%20du%20plessis%20RCB_1.png?itok=WY111moP"
    },
    {
        "id": 3,
        "playerName": "ANUJ RAWAT",
        "from": "RCB",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/anuj%20rcb.png?itok=SAycrJGb"
    },
    {
        "id": 4,
        "playerName": "WILL JACKS",
        "from": "RCB",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/Will%20Jacks.png?itok=S1XCV--P"
    },
    {
        "id": 5,
        "playerName": "RAJAT PATIDAR",
        "from": "RCB",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "BATSMAN",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/Rajat%20Patidar%20RCB.png?itok=Y99YEx94"
    },
    {
        "id": 6,
        "playerName": "GLENN MAXWELL",
        "from": "RCB",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/glenn%20maxwell%20RCB.png?itok=hv4Lj5Wk"
    },
    {
        "id": 7,
        "playerName": "MAHIPAL LOMROR",
        "from": "RCB",
        "price": "3.5 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/mahipal%20lomror%20RCB.png?itok=evWNMu9d"
    },
    {
        "id": 8,
        "playerName": "CAMERON GREEN",
        "from": "RCB",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-11/Cameron%20Green%20RCB%20%281%29.png?itok=OGPe-PBK"
    },
    {
        "id": 9,
        "playerName": "DINESH KARTHICK",
        "from": "RCB",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "WICKET-KEEPER",
        "photoUrl": "https://royalchallengers.com/PRRCB01/public/styles/s/public/2023-03/dinesh karthik RCB.png?itok=CV0WEug1"
    },
    {
        "id": 10,
        "playerName": "MOHAMMED SIRAJ",
        "from": "RCB",
        "price": "13 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Mohammed-Siraj.png"
    },
    {
        "id": 11,
        "playerName": "RAJAN KUMAR",
        "from": "RCB",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2023-10/Rajan%20Kumar%20RCB.png?itok=1u5UibYH"
    },
    {
        "id": 12,
        "playerName": "REECE TOPLEY",
        "from": "RCB",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/574.png"
    },
    {
        "id": 13,
        "playerName": "KARN SHARMA",
        "from": "RCB",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/98.png"
    }
];

const DDplayers = [
    {
        "id": 1,
        "playerName": "DAVID WARNER",
        "from": "DD",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/170.png"
    },
    {
        "id": 2,
        "playerName": "PRITHVI SHAW",
        "from": "DD",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Prithvi-Shaw.png"
    },
    {
        "id": 3,
        "playerName": "YASH DHULL",
        "from": "DD",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/777.png"
    },
    {
        "id": 4,
        "playerName": "MITCHELL MARSH",
        "from": "DD",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/40.png"
    },
    {
        "id": 5,
        "playerName": "RISHABH PANT(C)",
        "from": "DD",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "wicket-keeper",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Rishabh-Pant.png"
    },
    {
        "id": 6,
        "playerName": "AXAR PATEL",
        "from": "DD",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Axar-Pate.png"
    },
    {
        "id": 7,
        "playerName": "LALIT YADAV",
        "from": "DD",
        "price": "1.5 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://storage.googleapis.com/cricketimages/Players/1DE.png"
    },
    {
        "id": 8,
        "playerName": "VICKY OSTWAL",
        "from": "DD",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/786.png"
    },
    {
        "id": 9,
        "playerName": "ANRICH NORTJE",
        "from": "DD",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Anriche-Nortje.png"
    },
    {
        "id": 10,
        "playerName": "ISHANT SHARMA",
        "from": "DD",
        "price": "3.5 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2020/11/Ishant-Sharma.png"
    },
    {
        "id": 11,
        "playerName": "KULDEEP YADAV",
        "from": "DD",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://celebs.infoseemedia.com/wp-content/uploads/2021/08/Kuldeep-Yadav.png"
    },
    {
        "id": 12,
        "playerName": "KHALEEL AHMED",
        "from": "DD",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://i.cdn.newsbytesapp.com/sports/players/profile/khaleel-ahmed.png"
    },
    {
        "id": 13,
        "playerName": "LUNGI NGIDI",
        "from": "DD",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/329.png"
    }
];

const GTplayers = [
    {
        "id": 1,
        "playerName": "Shubman Gill(C)",
        "from": "GT",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/66818.png?v=4.45"
    },
    {
        "id": 2,
        "playerName": "David Miller",
        "from": "GT",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/5313.png?v=4.45"
    },
    {
        "id": 3,
        "playerName": "Kane Williamson",
        "from": "GT",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/4330.png?v=4.45"
    },
    {
        "id": 4,
        "playerName": "Sai Sudharsan",
        "from": "GT",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/69500.png?v=4.45"
    },
    {
        "id": 5,
        "playerName": "Wriddhiman Saha",
        "from": "GT",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "wicket-keeper",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/4508.png?v=4.45"
    },
    {
        "id": 6,
        "playerName": "Matthew Wade",
        "from": "GT",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "wicket-keeper",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/4195.png?v=4.45"
    },
    {
        "id": 7,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/65748.png?v=4.45"
    },
    {
        "id": 8,
        "playerName": "Vijay Shankar",
        "from": "GT",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/61738.png?v=4.45"
    },
    {
        "id": 9,
        "playerName": "Rahul Tewatia",
        "from": "GT",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/64440.png?v=4.45"
    },
    {
        "id": 10,
        "playerName": "Mohammed Shami",
        "from": "GT",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/28994.png?v=4.45"
    },
    {
        "id": 11,
        "playerName": "Mohit Sharma",
        "from": "GT",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/63341.png?v=4.45"
    },
    {
        "id": 12,
        "playerName": "Noor Ahmad",
        "from": "GT",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/71411.png?v=4.45"
    },
    {
        "id": 13,
        "playerName": "Sai Kishore",
        "from": "GT",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.gujarattitansipl.com/static-assets/images/players/66438.png?v=4.45"
    }
];    

const KKRplayers = [
    {
        "id": 1,
        "playerName": "SHREYAS IYER(C)",
        "from": "KKR",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/63961.png?v=5.23&w=200"
    },
    {
        "id": 2,
        "playerName": "RINKU SINGH",
        "from": "KKR",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/64727.png?v=5.23&w=200"
    },
    {
        "id": 3,
        "playerName": "NITISH RANA",
        "from": "KKR",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/63649.png?v=5.23&w=200"
    },
    {
        "id": 4,
        "playerName": "JASON ROY",
        "from": "KKR",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/33031.png?v=5.23&w=200"
    },
    {
        "id": 5,
        "playerName": "ANDRE RUSSEL",
        "from": "KKR",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/12047.png?v=5.23&w=200"
    },
    {
        "id": 6,
        "playerName": "SUNIL NARINE",
        "from": "KKR",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/11229.png?v=5.23&w=200"
    },
    {
        "id": 7,
        "playerName": "VENKATESH IYER",
        "from": "KKR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/65430.png?v=5.23&w=200"
    },
    {
        "id": 8,
        "playerName": "RAHMANULLAH GURBAZ",
        "from": "KKR",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "WICKET-KEEPER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/68027.png?v=5.23&w=200"
    },
    {
        "id": 9,
        "playerName": "VAIBHAV ARORA",
        "from": "KKR",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/74298.png?v=5.23&w=200"
    },
    {
        "id": 10,
        "playerName": "VARUN CHAKARAVARTHI",
        "from": "KKR",
        "price": "11.5 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/67469.png?v=5.23&w=200"
    },
    {
        "id": 11,
        "playerName": "SUYASH SHARMA",
        "from": "KKR",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/100564.png?v=5.23&w=200"
    },
    {
        "id": 12,
        "playerName": "HARSHIT RANA",
        "from": "KKR",
        "price": "1.5 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.kkr.in/static-assets/images/players/2020/93526.png?v=5.23&w=200"
    }
];

const LSGplayers = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "LSG",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/60122.png?v=6.6"
    },
    {
        "id": 2,
        "playerName": "KYLE MAYERS",
        "from": "LSG",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/57792.png?v=6.6"
    },
    {
        "id": 3,
        "playerName": "DEVDUTT PADIKKAL",
        "from": "LSG",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/67589.png?v=6.6"
    },
    {
        "id": 4,
        "playerName": "AYUSH BADONI",
        "from": "LSG",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/69656.png?v=6.6"
    },
    {
        "id": 5,
        "playerName": "DEEPAK HOODA",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/63748.png?v=6.6"
    },
    {
        "id": 6,
        "playerName": "KRUNAL PANDYA",
        "from": "LSG",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/63788.png?v=6.6"
    },
    {
        "id": 7,
        "playerName": "MARCUS STOINIS",
        "from": "LSG",
        "price": "5.5 Cr",
        "isPlay9ing": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/4311.png?v=6.6"
    },
    {
        "id": 8,
        "playerName": "QUINTON DE KOCK",
        "from": "LSG",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "WICKET-KEEPER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/28035.png?v=6.6"
    },{
        "id": 9,
        "playerName": "NICHOLAS POORAN",
        "from": "LSG",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "WICKET-KEEPER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/63726.png?v=6.6"
    },
    {
        "id": 10,
        "playerName": "MARK WOOD",
        "from": "LSG",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/57871.png?v=6.6"
    },
    {
        "id": 11,
        "playerName": "AMIT MISHRA",
        "from": "LSG",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/3480.png?v=6.6"
    },
    {
        "id": 12,
        "playerName": "NAVEEN-UL-HAQ",
        "from": "LSG",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/65876.png?v=6.6"
    },
    {
        "id": 13,
        "playerName": "RAVI BISHNOI",
        "from": "LSG",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.lucknowsupergiants.in/static-assets/images/players/71288.png?v=6.6"
    }
];

const MIplayers = [
    {
        "id": 1,
        "playerName": "ROHIT SHARMA(C)",
        "from": "MI",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/3852.png?v=3.91&w=200"
    },
    {
        "id": 2,
        "playerName": "SURYAKUMAR YADAV",
        "from": "MI",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/11803.png?v=3.91&w=200"
    },
    {
        "id": 3,
        "playerName": "TILAK VARMA",
        "from": "MI",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/70761.png?v=3.91&w=200"
    },
    {
        "id": 4,
        "playerName": "TIM DAVID",
        "from": "MI",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/67402.png?v=3.91&w=200"
    },
    {
        "id": 5,
        "playerName": "DEWALD BREVIS",
        "from": "MI",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/84562.png?v=3.91&w=200"
    },
    {
        "id": 6,
        "playerName": "ISHAN KISHAN",
        "from": "MI",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "WICKER-KEEPER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/64712.png?v=3.91&w=200"
    },
    {
        "id": 7,
        "playerName": "HARDIK PANDYA",
        "from": "MI",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/63751.png?v=3.91&w=200"
    },
    {
        "id": 8,
        "playerName": "ROMARIO SHEPHERD",
        "from": "MI",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "ALL-ROUNDER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/66243.png?v=3.91&w=200"
    },
    {
        "id": 9,
        "playerName": "JASPRIT BUMRAH",
        "from": "MI",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/63755.png?v=3.91&w=200"
    },
    {
        "id": 10,
        "playerName": "PIYUSH CHAWLA",
        "from": "MI",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/3729.png?v=3.91&w=200"
    },
    {
        "id":11,
        "playerName": "JASON BEHRENDORFF",
        "from": "MI",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/57041.png?v=3.91&w=200"
    },
    {
        "id": 12,
        "playerName": "ARJUN TENDULKAR",
        "from": "MI",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/69659.png?v=3.91&w=200"
    },
    {
        "id": 13,
        "playerName": "KUMAR KARTHIKEYA",
        "from": "MI",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.mumbaiindians.com/static-assets/images/players/large/70191.png?v=3.91&w=200"
    }
];

const PKplayers = [
    {
        "id": 1,
        "playerName": "shikhar dhawan",
        "from": "PK",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/3722.png?v=5.7"
    },
    {
        "id": 2,
        "playerName": "harpreet singh",
        "from": "PK",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/5211.png?v=5.81"
    },
    {
        "id": 3,
        "playerName": "shivam singh",
        "from": "PK",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/91592.png?v=5.81"
    },
    {
        "id": 4,
        "playerName": "liam livingstone",
        "from": "PK",
        "price": "13 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/63940.png?v=5.81"
    },
    {
        "id": 5,
        "playerName": "rishi dhawan",
        "from": "PK",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/4610.png?v=5.81"
    },
    {
        "id": 6,
        "playerName": "sam curran",
        "from": "PK",
        "price": "17 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/65584.png?v=5.81"
    },
    {
        "id": 7,
        "playerName": "sikandar raza",
        "from": "PK",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/25422.png?v=5.81"
    },
    {
        "id": 8,
        "playerName": "jonny bairstow",
        "from": "PK",
        "price": " Cr",
        "isPlaying": true,
        "description": "wicket-keeper",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/19394.png?v=5.81"
    },
    {
        "id": 9,
        "playerName": "prabhsimran singh",
        "from": "PK",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/70222.png?v=5.81"
    },
    {
        "id": 10,
        "playerName": "kagiso rabada",
        "from": "PK",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/63611.png?v=5.81"
    },
    {
        "id": 11,
        "playerName": "arshdeep singh",
        "from": "PK",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/67905.png?v=5.81"
    },
    {
        "id": 12,
        "playerName": "rahul chahar",
        "from": "PK",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/66823.png?v=5.81"
    },
    {
        "id": 13,
        "playerName": "harpreet brar",
        "from": "PK",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "BOWLER",
        "photoUrl": "https://www.punjabkingsipl.in/static-assets/images/players/70500.png?v=5.81"
    }
];    

const RRplayers = [
    {
        "id": 1,
        "playerName": "sanju samson",
        "from": "RR",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "wicket keeper",
        "photoUrl": "	https://www.rajasthanroyals.com/static-assets/images/players/61837.png?v=5.64"
    },
    {
        "id": 2,
        "playerName": "riyan parag",
        "from": "RR",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/66939.png?v=5.64"
    },
    {
        "id": 3,
        "playerName": "shimron hetmyer",
        "from": "RR",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/64861.png?v=5.64"
    },
    {
        "id": 4,
        "playerName": "yashasvi jaiswal",
        "from": "RR",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/69238.png?v=5.64"
    },
    {
        "id": 5,
        "playerName": "donovan ferreira",
        "from": "RR",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/23487.png?v=5.64"
    },
    {
        "id": 6,
        "playerName": "jos buttler",
        "from": "RR",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Wicket-keeper",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/9782.png?v=5.64"
    },
    {
        "id": 7,
        "playerName": "yuzvendra chahal",
        "from": "RR",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/9844.png?v=5.64"
    },
    {
        "id": 8,
        "playerName": "adam zampa",
        "from": "RR",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/58913.png?v=5.64"
    },
    {
        "id": 9,
        "playerName": "avesh khan",
        "from": "RR",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/64511.png?v=5.64"
    },
    {
        "id": 10,
        "playerName": "ravichandran ashwin",
        "from": "RR",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/4555.png?v=5.64"
    },
    {
        "id": 11,
        "playerName": "prasidh krishna",
        "from": "RR",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/65702.png?v=5.64"
    },
    {
        "id": 12,
        "playerName": "sandeep sharma",
        "from": "RR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/10116.png?v=5.64"
    },
    {
        "id": 13,
        "playerName": "trent boult",
        "from": "RR",
        "price": "13 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "photoUrl": "https://www.rajasthanroyals.com/static-assets/images/players/4338.png?v=5.64"
    },
];   

const SRHplayers = [
    {
        "id": 1,
        "playerName": "AIDEN MARKRAM(C)",
        "from": "SRH",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png"
    },
    {
        "id": 2,
        "playerName": "ABHISHEK SHARMA",
        "from": "SRH",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://parimatchnews.com/wp-content/uploads/2021/03/fkbtr.png"
    },
    {
        "id": 3,
        "playerName": "HARRY BROOK",
        "from": "SRH",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1218.png"
    },
    {
        "id": 4,
        "playerName": "RAHUL TRIPATHI",
        "from": "SRH",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "photoUrl": "https://th.bing.com/th/id/R.323a85527c4b234c31bb267ee45d477f?rik=yOONbtHnP%2f%2b0ZQ&riu=http%3a%2f%2fipluniverse.com%2fwp-content%2fuploads%2f2023%2f05%2fRahul-Tripathi.png&ehk=LIyI%2b%2bPox6o43ddaDcvLwJR6b4PqhHaiurubfSfj3WU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 5,
        "playerName": "MAYANK AGARWAL",
        "from": "SRH",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "batsman",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png"
    },
    {
        "id": 6,
        "playerName": "WASHINGTON SUNDAR",
        "from": "SRH",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/2973.png"
    },
    {
        "id": 7,
        "playerName": "MARCO JANSEN",
        "from": "SRH",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/586.png"
    },
    {
        "id": 8,
        "playerName": "AKEAL HOSEIN",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "all-rounder",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/722.png"
    },
    {
        "id": 9,
        "playerName": "HEINRICH KLAASEN",
        "from": "SRH",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "wicket keeper",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/635.png"
    },
    {
        "id": 10,
        "playerName": "BHUVNESHWAR KUMAR",
        "from": "SRH",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://crossbordercricket.com/wp-content/uploads/2021/04/Bhuvneshwar-Kumar.png"
    },
    {
        "id": 11,
        "playerName": "UMRAN MALIK",
        "from": "SRH",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://www.loksatta.com/wp-content/uploads/2022/05/cropped-umran-malik-1.webp"
    },
    {
        "id": 12,
        "playerName": "T.NATARAJAN",
        "from": "SRH",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/3831.png"
    },
    {
        "id": 13,
        "playerName": "ADIL RASHID",
        "from": "SRH",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "bowler",
        "photoUrl": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/311.png"
    }
];

const externalPlayers = [
    {
        "id": 1,
        "playerName": "daryl mitchel",
        "price": "8 Cr",
        "description": "BATSMAN",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ABk-NZj_hiiAFjHwn_w_Znmlgq_5KshqG3M3xxhVFVErppbLsfeJIyQ1YKfFm2Km2e0&usqp=CAU"
    },
    {
        "id": 2,
        "playerName": "mitchell starc",
        "price": "24 Cr",
        "description": "BOWLER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJ2JwFjWH9K3Tg98cSAVhUmnRSyBGzZoKszlVC0LTh_ICHLbMd0JzJxberdTqrtHhw_c&usqp=CAU"
    },
    {
        "id": 3,
        "playerName": "pat cummins",
        "price": "20 Cr",
        "description": "BOWLER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3K4OloSnDBX9JVgskcMgSdwt6EFc0IvaSJn1U1xZZyHz_GHf_8QFu--tofW_gWFGX6S4&usqp=CAU"
    },
    {
        "id": 4,
        "playerName": "STEVEN SMITH",
        "price": "2 Cr",
        "description": "BATSMAN",
        "photoUrl": "https://i.pinimg.com/originals/09/a5/92/09a592ad3ce90ea00e5b9ae81295c7be.png"
    },
    {
        "id": 5,
        "playerName": "BEN STOKES",
        "price": "15 Cr",
        "description": "ALL-ROUNDER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42aq-B4j1o91oVkFtDteia3-OspgQueKktJX40yT4clie6NgyfGzzXX-2kRPAXNww2PA&usqp=CAU"
    },

    {
        "id": 6,
        "playerName": "TOM CURRAN",
        "price": "5 Cr",
        "description": "ALL-ROUNDER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYkDX3toHT4HuWY7R2pivLL-QkvkYOR7CQk2HTmlq8HP4lK74s56dqcyZw0xIwmlxsQg&usqp=CAU"
    },
    {
        "id": 7,
        "playerName": "JASON HOLDER",
        "price": "3 Cr",
        "description": "ALL-ROUNDER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif6_1dXL7xuICplcfBrIelwVvVyAZDFE0-vBo7GsLFLYrQXG-wMBGkCWJgbbVwpHleFI&usqp=CAU"
    },
    {
        "id": 8,
        "playerName": "RACHIN RAVINDRA",
        "price": "6 Cr",
        "description": "BATSMAN",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPjDaJjYgR7_YMGDnK9XqacbQ7AMoL2s9v3kuUjv3iRTRIJVwXWhpqCWHSrTttngjRRQ&usqp=CAU"
    },
    {
        "id": 9,
        "playerName": "ALZARRI JOSEPH",
        "price": "3 Cr",
        "description": "BOWLER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58eaY9YZYHKQGWqXObX1pGakNADMxoGix19ue33qNVfrCegWEJmTg9uU00dozVjvdhDs&usqp=CAU"
    },
    {
        "id": 10,
        "playerName": "CHRIS WOAKES",
        "price": "7 Cr",
        "description": "BOWLER",
        "photoUrl": "https://resources.pulse.icc-cricket.com/players/100364/284/967.png"
    },
    {
        "id": 11,
        "playerName": "TIM SOUTHEE",
        "price": "8 Cr",
        "description": "BOWLER",
        "photoUrl": "https://static-files.cricket-australia.pulselive.com/headshots/288/1175-camedia.png"
    },
    {
        "id": 12,
        "playerName": "SHAI HOPE",
        "price": "2 Cr",
        "description": "BATSMAN",
        "photoUrl": "https://resources.pulse.icc-cricket.com/players/100364/284/2751.png"
    },
    {
        "id": 13,
        "playerName": "DAVID MALAN",
        "price": "11 Cr",
        "description": "BATSMAN",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSZNtrPBR6yhHpwTf-dHYHtLmKIq9RK7Pr-v0s9jRY1N5KxrWYhpA6xi9VV7lkuu4Qnw&usqp=CAU"
    },
    {
        "id": 14,
        "playerName": "KUSAL MENDIS",
        "price": "1 Cr",
        "description": "WICKET-KEEPER",
        "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2e5Q8n478urisql-HDDhPbxQR2L-HROLLsZ5VN9QZL7U5cAqCjEJp3XGsNHFmWKguFQ&usqp=CAU"
    }
]