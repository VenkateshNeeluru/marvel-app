import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // doctorsInfo = [
  //   {
  //     name: 'Dr. Vijay Agarwal',
  //     proffession: 'MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology',
  //     description: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.'
  //   },
  //   {
  //     name: 'Dr. Vijay Agarwal',
  //     proffession: 'MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology',
  //     description: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.'
  //   }
  // ];

  warningList = [
    {
      img: 'person.png',
      text: 'Failure to thrive – not gaining weight and height as per the age norms'
    },
    {
      img: 'head.png',
      text: 'Family history of death of children at young age due to immune deficiency'
    },
    {
      img: 'hand.png',
      text: 'Requirement of intravenous antibiotics to clear infections'
    },
    {
      img: 'lungs.png',
      text: '2 or more episodes of pneumonia'
    },
    {
      img: 'sleep.png',
      text: 'Infections warranting multiple hospitalizations'
    },
    {
      img: 'Group.png',
      text: 'Repeated episodes of diarrhea'
    },
    {
      img: 'nose.png',
      text: '2 or more episodes of sinus infections within a year'
    },
    {
      img: 'ear.png',
      text: '2 or more episodes of ear discharge'
    },
    {
      img: 'skin.png',
      text: 'Repeated skin infections'
    },
    {
      img: 'liver.png',
      text: 'Repeated abscess formation (liver abscess, brain abscess)'
    },
  ];

  expansionList = [
    {
      header: 'What are the conditions that requireBone Marrow Transplant?'
    },
    {
      header: 'Which are the hematological diseases that may benefit from bone marrow transplants?'
    },
    {
      header: 'Which are the Cancers that may benefit from bone marrow transplants?'
    },
    {
      header: 'Do bone marrow failure syndromes require BMT?'
    },
    {
      header: 'What are Primary Immune Deficiency diseases ?'
    },
    {
      header: 'Which are the immune deficiencies that warrant BMT?'
    },
    {
      header: 'What makes transplants at Aster CMI unique?'
    }
  ];

  carouselOptions = {
    margin: 25,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };
  sliderList = [
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer'
    },
  ];
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
