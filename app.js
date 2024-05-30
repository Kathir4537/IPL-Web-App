document.addEventListener('DOMContentLoaded', loadPage)

function loadPage() {
    displayTeams()
    displayCSKPlayers(CSKplayers);
    displayRCBPlayers(RCBplayers);
    displayDDPlayers(DDplayers);
    displayGTPlayers(GTplayers);
    displayKKRPlayers(KKRplayers);
    displayLSGPlayers(LSGplayers);
    displayMIPlayers(MIplayers);
    displayPKPlayers(PKplayers);
    displayRRPlayers(RRplayers);
    displaySRHPlayers(SRHplayers);
    TeamCardClick();
    outerCloseAdd();
    searchByTeamId();
    addPlayer();
    displayPlayer();
};

//create team card
function displayTeams() {
    let ArrteamDetails = teamsData;
    let teamsContainor = document.querySelector('.teams-containor');

    function createTeamCard(tData) {
        const tCard = document.createElement("div");
        tCard.classList.add("team-card");

        const tImgCard = document.createElement("div");
        tImgCard.classList.add("team-img");

        const tImage = document.createElement("img");
        tImage.src = tData.icon;
        tImage.alt = tData.teamName;

        tImgCard.appendChild(tImage);

        const tDetail = document.createElement("div");
        tDetail.classList.add("card-team-details");

        const tName = document.createElement("h3");
        tName.textContent = tData.teamName;

        tDetail.appendChild(tName);

        tCard.appendChild(tImgCard);
        tCard.appendChild(tDetail);

        return tCard;
    }
    function displayTeams(teamData) {
        teamsContainor.innerHTML = "";

        teamData.forEach((tData) => {
            const tCard = createTeamCard(tData);
            teamsContainor.appendChild(tCard);
        });
    }
    displayTeams(ArrteamDetails);
}

// Team details functions
// CSK details
function displayCSKPlayers(ArrCSK) {
    let CSKplayersContainor = document.querySelector('.CSK-team');

    let CSKplayerContainor = '';

    ArrCSK.map(data => {
        CSKplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    CSKplayersContainor.innerHTML = CSKplayerContainor;
};

// RCB details
function displayRCBPlayers(ArrRCB) {
    let RCBplayersContainor = document.querySelector('.RCB-team');
    let RCBplayerContainor = '';

    ArrRCB.map(data => {
        RCBplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    RCBplayersContainor.innerHTML = RCBplayerContainor;
};

// DD details
function displayDDPlayers(ArrDD) {
    let DDplayersContainor = document.querySelector('.DD-team');

    let DDplayerContainor = '';

    ArrDD.map(data => {
        DDplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;

    });
    DDplayersContainor.innerHTML = DDplayerContainor;
};

// GT details
function displayGTPlayers(ArrGT) {
    let GTplayersContainor = document.querySelector('.GT-team');

    let GTplayerContainor = '';

    ArrGT.map(data => {
        GTplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    GTplayersContainor.innerHTML = GTplayerContainor;
};

// KKR details
function displayKKRPlayers(ArrKKR) {
    let KKRplayersContainor = document.querySelector('.KKR-team');

    let KKRplayerContainor = '';

    ArrKKR.map(data => {
        KKRplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    KKRplayersContainor.innerHTML = KKRplayerContainor;
};

// LSG details
function displayLSGPlayers(ArrLSG) {
    let LSGplayersContainor = document.querySelector('.LSG-team');

    let LSGplayerContainor = '';

    ArrLSG.map(data => {
        LSGplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    LSGplayersContainor.innerHTML = LSGplayerContainor;
};

// MI details
function displayMIPlayers(ArrMI) {
    let MIplayersContainor = document.querySelector('.MI-team');

    let MIplayerContainor = '';

    ArrMI.map(data => {
        MIplayerContainor +=`<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    MIplayersContainor.innerHTML = MIplayerContainor;
};

// PK details
function displayPKPlayers(ArrPK) {
    let PKplayersContainor = document.querySelector('.PK-team');

    let PKplayerContainor = '';

    ArrPK.map(data => {
        PKplayerContainor += `<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    PKplayersContainor.innerHTML = PKplayerContainor;
};

// RR details
function displayRRPlayers(ArrRR) {
    let RRplayersContainor = document.querySelector('.RR-team');

    let RRplayerContainor = '';

    ArrRR.map(data => {
        RRplayerContainor += `<div class="player-card">
        <div class="player-img">
            <img class="img-src" src="${data.photoUrl}" alt="#">
        </div>
        <div class="player-description">
            <div class="player-name">${data.playerName}</div>
            <div class="player-others">
                <div class="player-roll">${data.description}</div>
                <div class="player-price">${data.price}</div>
            </div>
            <div class="player-team">${data.from}</div>
        </div>
    </div>`;
    });
    RRplayersContainor.innerHTML = RRplayerContainor;
};

// SRH details
function displaySRHPlayers(ArrSRH) {
    let SRHplayersContainor = document.querySelector('.SRH-team');

    let SRHplayerContainor = '';

    ArrSRH.map(data => {
        SRHplayerContainor += `<div class="player-card">
            <div class="player-img">
                <img class="img-src" src="${data.photoUrl}" alt="#">
            </div>
            <div class="player-description">
                <div class="player-name">${data.playerName}</div>
                <div class="player-others">
                    <div class="player-roll">${data.description}</div>
                    <div class="player-price">${data.price}</div>
                </div>
                <div class="player-team">${data.from}</div>
            </div>
        </div>`;
    });
    SRHplayersContainor.innerHTML = SRHplayerContainor;
};

// team card click functionality
function TeamCardClick() {
    const homeTeamCard = document.querySelectorAll('.team-card');
    let IPLTeamDetail = document.querySelectorAll('.team-details');
    const CSKback = document.querySelector('.csk-back');
    const RCBback = document.querySelector('.rcb-back');
    const DDback = document.querySelector('.dd-back');
    const GTback = document.querySelector('.gt-back');
    const KKRback = document.querySelector('.kkr-back');
    const LSGback = document.querySelector('.lsg-back');
    const MIback = document.querySelector('.mi-back');
    const PKback = document.querySelector('.pk-back');
    const RRback = document.querySelector('.rr-back');
    const SRHback = document.querySelector('.srh-back');

    homeTeamCard[0].addEventListener('click', () => {
        IPLTeamDetail[0].classList.remove('csk-team-details');
    });
    CSKback.addEventListener('click', () => {
        IPLTeamDetail[0].classList.add('csk-team-details');
    });

    homeTeamCard[1].addEventListener('click', () => {
        IPLTeamDetail[1].classList.remove('rcb-team-details');
    });
    RCBback.addEventListener('click', () => {
        IPLTeamDetail[1].classList.add('rcb-team-details');
    });

    homeTeamCard[2].addEventListener('click', () => {
        IPLTeamDetail[2].classList.remove('dd-team-details');
    });
    DDback.addEventListener('click', () => {
        IPLTeamDetail[2].classList.add('dd-team-details');
    });

    homeTeamCard[3].addEventListener('click', () => {
        IPLTeamDetail[3].classList.remove('gt-team-details');
    });
    GTback.addEventListener('click', () => {
        IPLTeamDetail[3].classList.add('gt-team-details');
    });

    homeTeamCard[4].addEventListener('click', () => {
        IPLTeamDetail[4].classList.remove('kkr-team-details');
    });
    KKRback.addEventListener('click', () => {
        IPLTeamDetail[4].classList.add('kkr-team-details');
    });

    homeTeamCard[5].addEventListener('click', () => {
        IPLTeamDetail[5].classList.remove('lsg-team-details');
    });
    LSGback.addEventListener('click', () => {
        IPLTeamDetail[5].classList.add('lsg-team-details');
    });

    homeTeamCard[6].addEventListener('click', () => {
        IPLTeamDetail[6].classList.remove('mi-team-details');
    });
    MIback.addEventListener('click', () => {
        IPLTeamDetail[6].classList.add('mi-team-details');
    });

    homeTeamCard[7].addEventListener('click', () => {
        IPLTeamDetail[7].classList.remove('pk-team-details');
    });
    PKback.addEventListener('click', () => {
        IPLTeamDetail[7].classList.add('pk-team-details');
    });

    homeTeamCard[8].addEventListener('click', () => {
        IPLTeamDetail[8].classList.remove('rr-team-details');
    });
    RRback.addEventListener('click', () => {
        IPLTeamDetail[8].classList.add('rr-team-details');
    });

    homeTeamCard[9].addEventListener('click', () => {
        IPLTeamDetail[9].classList.remove('srh-team-details');
    });
    SRHback.addEventListener('click', () => {
        IPLTeamDetail[9].classList.add('srh-team-details');
    });

}


// display player details in another page
function displayPlayer() {
    let singlePlayerCardImg = document.querySelectorAll('.player-img', '.player-description');
    let homepage = document.querySelector('.teams-grid');
    let playerCardHomePage = document.querySelector('.team-details-containor-section');
    let aboutPage = document.querySelector('.about-player-details');
    singlePlayerCardImg.forEach((card) => {
        card.addEventListener('click', () => {
            homepage.classList.add('teams-grid-none');
            playerCardHomePage.classList.add('team-details-containor-section-none');
            aboutPage.classList.remove('about-player-details-none');
            playerPage();
        });
    }
    );
    singlePlayerCardImg.forEach((card) => {
        card.addEventListener('click', playerPage);
    }
    );

    function playerPage() {
        let singlePlayerData = this.parentElement;
        let singlePlayerImg = singlePlayerData.querySelector('.player-img');
        let ImgSrc = singlePlayerImg.querySelector('.img-src').src; //take
        let playerDiscript = singlePlayerData.querySelector('.player-description');
        let playerName = playerDiscript.querySelector('.player-name').innerHTML; //take
        let team = playerDiscript.querySelector('.player-team').innerHTML; //take
        let otherDetails = singlePlayerData.querySelector('.player-others');
        let price = otherDetails.querySelector('.player-price').innerHTML; //take
        let roll = otherDetails.querySelector('.player-roll').innerHTML; //take
        console.log(ImgSrc, playerName, team, roll, price);

        let aboutName = document.querySelector('.single-palyer-nameh4').innerHTML;
        console.log(aboutName)
        let displayFun = displayPlayerPage(ImgSrc, playerName, team, roll, price);

        let aboutPageContainor = document.querySelector('.about-player-details');
        aboutPageContainor.innerHTML = displayFun;
    }

    function displayPlayerPage(ImgSrc, playerName, team, roll, price) {
        return pageContainor = `<div class="player-details-containor">
        <div class="about-flex-one">
            <div class="single-palyer-name">PLAYER NAME<br>
                <h4>${playerName}</h4></div>
            <div class="single-player-price">PRICE <br>
                <h4>${price}</h4></div>
        </div>
        <div class="about-flex-two">
            <div class="single-player-role">POSITION <br>
                <h4>${roll}</h4></div>
            <div class="single-player-team">TEAM <br>
                <h4>${team}</h4></div>
        </div>
    </div>
    <div class="player-img-containor">
        <div class="single-player-card">
            <img
                src="${ImgSrc}"
                alt="#">
        </div>
    </div>`;
    };
};
// Search functionality
function searchByTeamId() {
    let searchInput = document.querySelector('.search-box');
    let searchSymbol = document.querySelector('.search-img');
    let IPLTeamDetail = document.querySelectorAll('.team-details');

    searchSymbol.addEventListener('click', () => {
        if (searchInput.value == 'CSK' || searchInput.value == 'csk') {
            IPLTeamDetail[0].classList.remove('csk-team-details');
        } if (searchInput.value == 'RCB' || searchInput.value == 'rcb') {
            IPLTeamDetail[1].classList.remove('rcb-team-details');
        } if (searchInput.value == 'DD' || searchInput.value == 'dd') {
            IPLTeamDetail[2].classList.remove('dd-team-details');
        } if (searchInput.value == 'GT' || searchInput.value == 'gt') {
            IPLTeamDetail[3].classList.remove('gt-team-details');
        } if (searchInput.value == 'KKR' || searchInput.value == 'kkr') {
            IPLTeamDetail[4].classList.remove('kkr-team-details');
        } if (searchInput.value == 'LSG' || searchInput.value == 'lsg') {
            IPLTeamDetail[5].classList.remove('lsg-team-details');
        } if (searchInput.value == 'MI' || searchInput.value == 'mi') {
            IPLTeamDetail[6].classList.remove('mi-team-details');
        } if (searchInput.value == 'PK' || searchInput.value == 'pk' || searchInput.value == 'KXIP') {
            IPLTeamDetail[7].classList.remove('pk-team-details');
        } if (searchInput.value == 'RR' || searchInput.value == 'rr') {
            IPLTeamDetail[8].classList.remove('rr-team-details');
        } if (searchInput.value == 'SRH' || searchInput.value == 'srh') {
            IPLTeamDetail[9].classList.remove('srh-team-details');
        }
    });
}

// Add players in teams functionalities 

function outerCloseAdd() {
    let addPlayerContainor = document.querySelector('.add-players-containor');
    let outerAddPlayerBtn = document.querySelector('.add-button');
    outerAddPlayerBtn.addEventListener('click', () => {
        addPlayerContainor.classList.remove('close-is-close');
    });
    let addPlayerContainorClose = document.querySelector('.add-players-containor-close');
    addPlayerContainorClose.addEventListener('click', () => {
        addPlayerContainor.classList.add('close-is-close');
    });
}

//add player in team
function addPlayer() {
    let addPlayerBtn = document.querySelectorAll('.add-player-icon');
    addPlayerBtn.forEach((btn) => {
        btn.addEventListener('click', findTeam)
    }
    );

    function findTeam() {
        let playerData = this.parentElement;
        let teamData = playerData.querySelector('.add-team-input').value;   //take
        let playerCardData = playerData.parentElement;
        let playerImgParent = playerCardData.querySelector('.add-player-card-div');
        let playerImg = playerImgParent.querySelector('.addImg').src;      //take
        let playerDetailsData = playerCardData.querySelector('.add-player-detials');
        let nameData = playerDetailsData.querySelector('.add-player-name').innerHTML;  //take
        let rollData = playerDetailsData.querySelector('.add-player-roll').innerHTML;  //take
        let getPriceData = playerDetailsData.querySelector('.add-player-price');
        let priceData = getPriceData.querySelector('.price-of-player').innerHTML;  //take

        if (teamData == 'CSK' || teamData == 'csk') {
            CSKplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayCSKPlayers(CSKplayers);
        } if (teamData == 'rcb' || teamData == 'RCB') {
            RCBplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayRCBPlayers(RCBplayers);
        } if (teamData == 'DD' || teamData == 'dd') {
            DDplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayDDPlayers(DDplayers);
        } if (teamData == 'GT' || teamData == 'gt') {
            GTplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayGTPlayers(GTplayers);
        } if (teamData == 'KKR' || teamData == 'kkr') {
            KKRplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayKKRPlayers(KKRplayers);
        } if (teamData == 'LSG' || teamData == 'lsg') {
            LSGplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayLSGPlayers(LSGplayers);
        } if (teamData == 'MI' || teamData == 'mi') {
            MIplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayMIPlayers(MIplayers);
        } if (teamData == 'PK' || teamData == 'pk' || teamData == 'KXIP') {
            PKplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayPKPlayers(PKplayers);
        } if (teamData == 'RR' || teamData == 'rr') {
            RRplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displayRRPlayers(RRplayers);
        } if (teamData == 'SRH' || teamData == 'srh') {
            SRHplayers.push(
                {
                    "id": length + 1,
                    "playerName": nameData,
                    "from": teamData,
                    "price": priceData,
                    "isPlaying": true,
                    "description": rollData,
                    "photoUrl": playerImg
                }
            );
            this.parentElement.parentElement.remove();
            displaySRHPlayers(SRHplayers);
        }
    }
}