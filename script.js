await ymaps3.ready;

ymaps3.import.registerCdn(
    'https://cdn.jsdelivr.net/npm/{package}',
    ['@yandex/ymaps3-default-ui-theme@0.0']
);

const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker
} = ymaps3;


// =====================================
// BUILDINGS
// =====================================

const buildings = [

    {
        id: 1,
        coordinates: [84.935962, 56.156439],
        title: 'Введенская церковь',
        year: '1726',
        type: 'Памятник архитектуры',
        description: `Введенская церковь — один из старейших православных храмов Томского района. Построена в 1726 году, является объектом культурного наследия регионального значения. На протяжении трёх веков служила духовным центром Ярского и окрестных сёл.`,
        images: [
            'images/church/church_1.jpg',
            'images/church/church_2.png'
        ],
        model: 'models/church.glb',
        extra: [
            'Объект культурного наследия',
            'Сохранился оригинальный фасад',
            'Реставрация выполнена в 2023 году'
        ],
        markerClass: 'marker-church'
    },

    {
        id: 2,
        coordinates: [84.946066, 56.152944],
        title: 'Ул. Береговая #9',
        year: 'В конце 19-го - начале 20-го века',
        type: 'Историческое здание',
        description: `Это часть наследия старого города, сохранившая следы жизни сибиряков ушедшей эпохи.`,
        images: [
            'images/beregovaya_street/beregovaya_1.png',
            'images/beregovaya_street/beregovaya_2.png',
            'images/beregovaya_street/beregovaya_3.png',
            'images/beregovaya_street/beregovaya_4.png'
        ],
        model: 'models/beregovaya_9.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 3,
        coordinates: [84.933887, 56.160005],
        title: 'Ул. Октябрьская #14',
        year: '—',
        type: 'Историческое здание',
        description: `-`,
        images: [
            'images/oktyabrskaya_street/14/oktyabrskaya_1.jpg',
            'images/oktyabrskaya_street/14/oktyabrskaya_2.jpg'
        ],
        model: 'models/oktyabrskaya_14.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 4,
        coordinates: [84.934875, 56.156511],
        title: 'Ул. Октябрьская #31',
        year: '—',
        type: 'Историческое здание',
        description: `-`,
        images: [
            'images/oktyabrskaya_street/31/oktyabrskaya_1.jpg',
            'images/oktyabrskaya_street/31/oktyabrskaya_2.jpg',
            'images/oktyabrskaya_street/31/oktyabrskaya_3.jpg',
            'images/oktyabrskaya_street/31/oktyabrskaya_4.jpg'
        ],
        model: 'models/oktyabrskaya_31.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 5,
        coordinates: [84.939303, 56.155237],
        title: 'Ул. Октябрьская #40',
        year: 'Построен в начале XX века',
        type: 'Историческое здание',
        description: `Родители хозяйки дома строили дом своими руками,  
        помогали сельчане. Была конюшня с конем,
        иметь коня было редкостью.`,
        images: [
            'images/oktyabrskaya_street/40/oktyabrskaya_1.png',
            'images/oktyabrskaya_street/40/oktyabrskaya_2.png',
            'images/oktyabrskaya_street/40/oktyabrskaya_3.png',
            'images/oktyabrskaya_street/40/oktyabrskaya_4.png'
        ],
        model: 'models/oktyabrskaya_40.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 6,
        coordinates: [84.939305, 56.154806],
        title: 'Ул. Октябрьская #41',
        year: 'Построен приблизительно, в IX веке',
        type: 'Историческое здание',
        description: `Несколько десятилетий там проживала семья из 6 человек: родители нынешних хозяев
        и их дети (трое мальчиков и одна девочка). На постоянной основе никто не живет, семьи
        приезжают только в летний период.`,
        images: [
            'images/oktyabrskaya_street/41/oktyabrskaya_1.png',
            'images/oktyabrskaya_street/41/oktyabrskaya_2.png',
            'images/oktyabrskaya_street/41/oktyabrskaya_3.png',
            'images/oktyabrskaya_street/41/oktyabrskaya_4.png'
        ],
        model: 'models/oktyabrskaya_41.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 7,
        coordinates: [84.941846, 56.154074],
        title: 'Ул. Октябрьская #49',
        year: '—',
        type: 'Историческое здание',
        description: `Дом куплен в 1959 году семьей нынешней хозяйки (Татьяны Прокопьевны, 1958
        г.р.) у семьи Гусевых. Отец хозяйки проводил перепланировки и пристройки.`,
        images: [
            'images/oktyabrskaya_street/49/oktyabrskaya_1.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_2.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_3.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_4.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_5.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_6.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_7.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_8.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_9.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_10.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_11.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_12.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_13.jpg',
            'images/oktyabrskaya_street/49/oktyabrskaya_14.jpg'
        ],
        model: 'models/oktyabrskaya_49.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 8,
        coordinates: [84.946247, 56.154039],
        title: 'Ул. Октябрьская #64',
        year: '1927',
        type: 'Историческое здание',
        description: `Строили жители села – 2 брата Петровых. Один
        брат жил в одной половине дома, второй – в другой.
        Петровы рано умерли и дом переходил к разным
        хозяевам.
        Позднее половина дома перешла во владение
        Сельскому совету. Теперь его сдавали молодым
        учителям, приехавшим работать в село Ярское.
        С 1974 года в доме живет Алексей Степанович –
        бывший учитель русского языка и литературы.`,
        images: [
            'images/oktyabrskaya_street/64/oktyabrskaya_1.jpg',
            'images/oktyabrskaya_street/64/oktyabrskaya_2.jpg',
            'images/oktyabrskaya_street/64/oktyabrskaya_3.jpg',
            'images/oktyabrskaya_street/64/oktyabrskaya_4.png'
        ],
        model: 'models/oktyabrskaya_64.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 9,
        coordinates: [84.946328, 56.153934],
        title: 'Ул. Октябрьская #66',
        year: '—',
        type: 'Историческое здание',
        description: `Здание представляет
        собой типичный для этой местности дом с длиной главного фасада в 4 оси окон.
        К основной жилой части здания пристроен новый вход в здание, а также ещё одна
        комната, предположительно заброшенная или используемая как склад.
        В окнах сохранены деревянные рамы, с лучковой формой завершения.`,
        images: [
            'images/oktyabrskaya_street/66/oktyabrskaya_1.jpg',
            'images/oktyabrskaya_street/66/oktyabrskaya_2.jpg',
            'images/oktyabrskaya_street/66/oktyabrskaya_3.jpg',
            'images/oktyabrskaya_street/66/oktyabrskaya_4.jpg',
            'images/oktyabrskaya_street/66/oktyabrskaya_5.jpg'
        ],
        model: 'models/oktyabrskaya_66.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 10,
        coordinates: [84.948657, 56.152516],
        title: 'Ул. Октябрьская #80',
        year: '—',
        type: 'Историческое здание',
        description: ``,
        images: [
            'images/oktyabrskaya_street/80/oktyabrskaya_1.png',
            'images/oktyabrskaya_street/80/oktyabrskaya_2.png',
            'images/oktyabrskaya_street/80/oktyabrskaya_3.png',
            'images/oktyabrskaya_street/80/oktyabrskaya_4.png',
            'images/oktyabrskaya_street/80/oktyabrskaya_5.png'
        ],
        model: 'models/oktyabrskaya_80.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 11,
        coordinates: [84.935072, 56.157443],
        title: 'Ул. Рабочая #2',
        year: '~ 1920',
        type: 'Историческое здание',
        description: `Дом был куплен семьей Савельевых в 1957 году, а построен был примерно в 1920 году. 
        В доме было две комнаты, чуть позже, в 1958 году пристроили еще несколько комнат. В 2017 был сделан ремонт, 
        убрали печку, пристроили гараж и отделали фасад дома в металлический сайдинг. Сейчас в дом приезжают только летом на выходные.`,
        images: [
            'images/working_street/2/working_1.jpg',
            'images/working_street/2/working_2.jpg',
            'images/working_street/2/working_3.jpg',
            'images/working_street/2/working_4.jpg',
            'images/working_street/2/working_5.jpg',
            'images/working_street/2/working_6.jpg',
            'images/working_street/2/working_7.jpg',
            'images/working_street/2/working_8.jpg',
            'images/working_street/2/working_9.jpg'
        ],
        model: 'models/working_2.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 12,
        coordinates: [84.936141, 56.157468],
        title: 'Ул. Рабочая #4',
        year: '—',
        type: 'Историческое здание',
        description: `История дома начинается с 60-х годов, а точнее с момента въезда в него новых хозяев, 
        так как точная дата постройки неизвестна. Изначально дом был значительно меньше, чем сейчас. 
        Например, на месте современной прихожей раньше находилась веранда, которую позже перенесли под навес. 
        Вся территория участка, помимо основного здания, была отстроена в течении 50-ти лет.`,
        images: [
            'images/working_street/4/working_1.png',
            'images/working_street/4/working_2.png',
            'images/working_street/4/working_3.png',
            'images/working_street/4/working_4.png',
            'images/working_street/4/working_5.png',
            'images/working_street/4/working_6.png',
            'images/working_street/4/working_7.png',
            'images/working_street/4/working_8.png'
        ],
        model: 'models/working_4.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    /*
    {
        id: 13,
        coordinates: [84.940345, 56.155734],
        title: 'Ул. Рабочая #16',
        year: '—',
        type: 'Историческое здание',
        description: `-`,
        images: [],
        model: 'models/.glb',
        extra: [''],
        markerClass: 'marker-default'
    },
    */

    {
        id: 14,
        coordinates: [84.941343, 56.157609],
        title: 'Ул. Школьная #10',
        year: '—',
        type: 'Историческое здание',
        description: `Владельцем жилого дома на Школьной, 10 – Андреев Михаил Петрович – гостеприимный, добрый и хозяйственный человек. 
        В 1969 году Михаил Петрович переехал из города Томска в село Ярское и приобрел жилой дом, в котором проживает и по сей день. 
        Здесь же он встретил свою вторую любовь, с которой и провел большую часть времени. По ходу ведения хозяйства, 
        Михаил Петрович самостоятельно пристраивал хозяйственные помещения, веранду, каждый год подготавливал дрова на зимний период, 
        занимался разведением коров, свиней, кур.`,
        images: [
            'images/school_street/10/school_1.jpg',
            'images/school_street/10/school_2.jpg',
            'images/school_street/10/school_3.jpg',
            'images/school_street/10/school_4.jpg',
            'images/school_street/10/school_5.jpg',
            'images/school_street/10/school_6.jpg',
            'images/school_street/10/school_7.jpg',
        ],
        model: 'models/school_10.glb',
        extra: [''],
        markerClass: 'marker-default'
    },

    {
        id: 15,
        coordinates: [84.942852, 56.158055],
        title: 'Ул. Школьная #18',
        year: '—',
        type: 'Историческое здание',
        description: ``,
        images: [
            'images/school_street/18/school_1.jpg',
            'images/school_street/18/school_2.jpg',
        ],
        model: 'models/school_18.glb',
        extra: [''],
        markerClass: 'marker-default'
    }

];


// =====================================
// MAP
// =====================================

const map = new YMap(document.getElementById('map'), {
    location: {
        center: [84.94151349999996, 56.156553245418614],
        zoom: 15
    },
    controls: [],
    behaviors: ['drag', 'scrollZoom', 'pinchZoom', 'dblClick', 'mouseRotate', 'mouseTilt']
});

const {
    YMapControls,
    YMapControl,
    YMapComplexEntity
} = ymaps3;

const {
    YMapZoomControl
} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');


// =====================================
// КНОПКИ УПРАВЛЕНИЯ
// =====================================

const controlsContainer = new YMapControls({ position: 'right' });
controlsContainer.addChild(new YMapZoomControl({}));


// =====================================
// FULLSCREEN
// =====================================

function fullScreenBtnHandler() {
    const mapContainer = document.getElementById('map');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        mapContainer.requestFullscreen();
    }
}

function onFullscreenChange() {
    const mapContainer = document.getElementById('map');
    if (document.fullscreenElement) {
        mapContainer.classList.add('fullscreen-map');
    } else {
        mapContainer.classList.remove('fullscreen-map');
    }
    map.update({ location: map.location });
}

class FullscreenButton extends YMapComplexEntity {

    _element = null;
    _detachDom = null;

    _createElement() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.onclick = fullScreenBtnHandler;
        btn.classList.add('ym-fullscreen-btn');
        document.addEventListener('fullscreenchange', () => {
            btn.classList.toggle('exit-fullscreen');
            onFullscreenChange();
        });
        return btn;
    }

    _onAttach() {
        this._element = this._createElement();
        this._detachDom = ymaps3.useDomContext(this, this._element, this._element);
    }

    _onDetach() {
        if (this._detachDom) this._detachDom();
    }
}

const fullscreenControl = new YMapControl();
fullscreenControl.addChild(new FullscreenButton({}));
controlsContainer.addChild(fullscreenControl);
map.addChild(controlsContainer);

map.addChild(new YMapDefaultSchemeLayer());
map.addChild(new YMapDefaultFeaturesLayer());


// =====================================
// MARKERS
// =====================================

buildings.forEach(building => {

    const markerElement = document.createElement('div');
    markerElement.className = `marker ${building.markerClass}`;

    markerElement.addEventListener('click', () => {
        selectBuilding(building);
    });

    const marker = new YMapMarker({ coordinates: building.coordinates }, markerElement);
    map.addChild(marker);

});


// =====================================
// BUILDING INFO
// =====================================

let currentImages = [];
let currentImageIndex = 0;
let buildingSelected = false;

function selectBuilding(building) {

    // Скрываем начальный экран, показываем блоки
    if (!buildingSelected) {
        buildingSelected = true;
        document.getElementById('infoInitial').style.display = 'none';
        document.getElementById('galleryBlock').style.display = 'block';
        document.getElementById('buildingInfoBlock').style.display = 'block';
    }

    document.getElementById('buildingTitle').textContent = building.title;
    document.getElementById('buildingYear').textContent = building.year;
    document.getElementById('buildingType').textContent = building.type;
    document.getElementById('buildingDescription').textContent = building.description;

    const extraContainer = document.getElementById('buildingExtra');
    extraContainer.innerHTML = '';
    building.extra.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        extraContainer.appendChild(li);
    });

    currentImages = building.images;
    currentImageIndex = 0;
    updateGallery();

    load3DModel(building.model);
}


// =====================================
// GALLERY
// =====================================

function updateGallery() {
    document.getElementById('buildingImage').src = currentImages[currentImageIndex];
}

document.getElementById('nextImage').onclick = () => {
    currentImageIndex++;
    if (currentImageIndex >= currentImages.length) currentImageIndex = 0;
    updateGallery();
};

document.getElementById('prevImage').onclick = () => {
    currentImageIndex--;
    if (currentImageIndex < 0) currentImageIndex = currentImages.length - 1;
    updateGallery();
};


// =====================================
// SHOW 3D
// =====================================

const viewerSection = document.getElementById('viewerSection');

document.getElementById('showModelBtn').onclick = () => {
    viewerSection.classList.remove('hidden');
    viewerSection.scrollIntoView({ behavior: 'smooth' });
};


// =====================================
// CLOSE VIEWER
// =====================================

document.getElementById('closeViewerBtn').onclick = () => {
    viewerSection.classList.add('hidden');
};


// =====================================
// 3D VIEWER
// =====================================

function load3DModel(modelPath) {
    document.getElementById('viewerContainer').innerHTML = `
        <iframe
            src="3d-viewer.html?model=${modelPath}"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
}