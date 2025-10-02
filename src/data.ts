import bootstrap from './assets/logos/bootstrap.png';
import css from './assets/logos/css.png';
import docker from './assets/logos/docker.png';
import django from './assets/logos/django.png';
import drf from './assets/logos/drf.png';
import js from './assets/logos/js.png';
import typescript from './assets/logos/typescript.png';
import html5 from './assets/logos/html5.png';
import postgresql from './assets/logos/postgresql.png';
import git from './assets/logos/git.png';
import github from './assets/logos/github.png';
import react from './assets/logos/react.png';
import next from './assets/logos/next-js.png';
import python from './assets/logos/python.png';
import tailwind from './assets/logos/tailwind.png';
import wordpress from './assets/logos/wordpress.png';
import php from './assets/logos/php.png';
import expo from './assets/logos/expo.png';
import aws from './assets/logos/aws.png';
import prodeImg from './assets/projects/prodeapp.png';
import cocinaImg from './assets/projects/cocinasalud.png';
import guanyemImg from './assets/projects/guanyemgirona.png';
import cmImg from './assets/projects/cmaccesorios.png';
import bespokeImg from './assets/projects/bespoke.png';
import miraveImg from './assets/projects/mirave.png';
import autodirectoImg from './assets/projects/autodirecto.png';
import reminderImg from './assets/projects/imagereminder.png';
import votarImg from './assets/projects/votar-fms.png';
import { 
    WORDPRESS, PHP, REACT, TYPESCRIPT, DJANGO, DRF, HTML5, CSS3, POSTGRESQL, PYTHON, 
    GIT, GITHUB, BOOTSTRAP, DOCKER, TAILWIND, MYSQL, JS, EXPO, AWS, FINEGAN,
    MAPPEK, PPC, MUCHTICKET, REACT_NATIVE, NEXTJS
} from './constants';
import type { LogoItem } from './types';

export const LOGOS: LogoItem[] = [
  { src: bootstrap, alt: BOOTSTRAP },
  { src: css, alt: CSS3 },
  { src: docker, alt: DOCKER },
  { src: aws, alt: AWS },
  { src: django, alt: DJANGO },
  { src: drf, alt: DRF },
  { src: js, alt: JS },
  { src: typescript, alt: TYPESCRIPT },
  { src: html5, alt: HTML5 },
  { src: postgresql, alt: POSTGRESQL },
  { src: git, alt: GIT },
  { src: github, alt: GITHUB },
  { src: react, alt: REACT },
  { src: next, alt: NEXTJS },
  { src: expo, alt: EXPO },
  { src: python, alt: PYTHON },
  { src: tailwind, alt: TAILWIND },
  { src: wordpress, alt: WORDPRESS },
  { src: php, alt: PHP },
];

export const experienceData = [
    {
        companyName: FINEGAN,
        title: 'software-developer-part-time',
        startDate: 'feb',
        startDateSuffix: '2025',
        endDate: 'present',
        description: 'finegan-desc',
        technologies: [
            DJANGO, DRF, WORDPRESS, PHP, HTML5, CSS3, JS, MYSQL, POSTGRESQL, PYTHON,
            GIT, GITHUB, BOOTSTRAP
        ]
    },
    {
        companyName: MAPPEK,
        title: 'freelancer-developer',
        startDate: 'sep',
        startDateSuffix: '2023',
        endDate: 'present',
        description: 'mappek-desc',
        technologies: [
            DJANGO, DRF, PYTHON, POSTGRESQL, REACT, EXPO, TYPESCRIPT, WORDPRESS, PHP,
            TAILWIND, HTML5, CSS3, GIT, GITHUB
        ]
    },
    {
        companyName: PPC,
        title: 'full-stack-developer',
        startDate: 'jan',
        startDateSuffix: '2024',
        endDate: 'aug',
        endDateSuffix: '2024',
        description: 'ogppc-desc',
        technologies: [
            DJANGO, DRF, PYTHON, POSTGRESQL, REACT, TYPESCRIPT, DOCKER, AWS, HTML5, 
            CSS3, BOOTSTRAP, GIT, GITHUB
        ]
    },
    {
        companyName: MUCHTICKET,
        title: 'full-stack-developer',
        startDate: 'nov',
        startDateSuffix: '2021',
        endDate: 'jul',
        endDateSuffix: '2023',
        description: 'muchticket-desc',
        technologies: [
            DJANGO, DRF, PYTHON, MYSQL, JS, HTML5, CSS3, BOOTSTRAP, GIT, GITHUB
        ]
    }
];

export const projectsData = [
    {
        title: 'ProdeApp',
        url: 'https://prodeapp.com',
        img: prodeImg,
        description: 'prode-desc',
        technologies: [
            DJANGO, DRF, PYTHON, POSTGRESQL, DOCKER, AWS, TYPESCRIPT, REACT_NATIVE, EXPO
        ]
    },
    {
        title: 'CocinaSalud',
        companyName: MAPPEK,
        url: 'https://margaritagonzalez.com',
        img: cocinaImg,
        description: 'cocina-desc',
        technologies: [
            DJANGO, PYTHON, MYSQL, JS, HTML5, CSS3, BOOTSTRAP
        ]
    },
    {
        title: 'Guanyem Girona',
        companyName: FINEGAN,
        url: 'https://guanyemgirona.cat',
        img: guanyemImg,
        description: 'guanyem-desc',
        technologies: [
            WORDPRESS, PHP, HTML5, CSS3, JS
        ]
    },
    {
        title: 'CMAccesorios',
        companyName: MAPPEK,
        url: 'https://cmaccesorios.com',
        img: cmImg,
        description: 'cm-desc',
        technologies: [
            WORDPRESS, PHP, HTML5, CSS3, JS
        ]
    },
    {
        title: 'Arquitectura BeSpoke',
        companyName: MAPPEK,
        url: 'https://arquitecturabespoke.ar',
        img: bespokeImg,
        description: 'bespoke-desc',
        technologies: [
            WORDPRESS, PHP, HTML5, CSS3, JS
        ]
    },
    {
        title: 'ImageReminder',
        url: 'https://play.google.com/store/apps/details?id=com.matipendino2001.imagereminder',
        img: reminderImg,
        description: 'imagereminder-desc',
        technologies: [
            DJANGO, DRF, POSTGRESQL, TYPESCRIPT, REACT_NATIVE, EXPO
        ]
    },
    {
        title: 'Mirave',
        companyName: FINEGAN,
        url: 'https://mirave.es',
        img: miraveImg,
        description: 'mirave-desc',
        technologies: [
            WORDPRESS, PHP, HTML5, CSS3, JS
        ]
    },
    {
        title: 'Auto Directo',
        url: 'https://autodirecto.com.ar',
        img: autodirectoImg,
        companyName: MAPPEK,
        description: 'autodirecto-desc',
        technologies: [
            WORDPRESS, PHP, HTML5, CSS3, JS
        ]
    },
    {
        title: 'Votar FMS',
        url: 'https://play.google.com/store/apps/details?id=com.eddd.votarfms',
        img: votarImg,
        description: 'votarfms-desc',
        technologies: [
            TYPESCRIPT, REACT_NATIVE, EXPO
        ]
    }
];