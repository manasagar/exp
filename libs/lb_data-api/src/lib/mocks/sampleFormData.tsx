const pr14 = [
  {
    type: 'form',
    config: {
      fieldsPerView: 3,
      submitOn: 'next',
    },
    details: {
      title: `<span style="text-transform: capitalize; ">Form heading</span>`,
      subheading: `<span style="text-transform: capitalize; ">form subheading</span>`,
      listDetails: {
        title: `<span style="text-transform: capitalize; ">list title</span>`,
        list: [
          `<span style="text-transform: capitalize; "List items</span>`,
        ],
      },
    },
    fields: [
      {
        label: `<span style="text-transform: capitalize; ">Checkbox Question</span>`,
        id: '78',
        validations: ['required'],
        type: 'checkbox',
        options: [
          {
            display: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
              { imgUrl: `${assetPath}/dummyImg` }
            )}"/><span style="text-transform: capitalize; ">checkbox option</span>`,
            value: 'tytt',
            ifSelectedDisplay: [79],
            responses: [
              `<span style="text-transform: capitalize; ">76 to do so much</span>`,
            ],
          },
        ],
      },
      {
        label: `<span style="text-transform: capitalize; ">radio button question</span>`,
        id: '79',
        validations: ['required'],
        type: 'radio',
        options: [
          {
            display: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
              { imgUrl: `${assetPath}/dummyImg` }
            )}"/><span style="text-transform: capitalize; ">Radio button option</span>`,
            value: 'tytt',
            ifSelectedDisplay: [],
            responses: [
              `<span style="text-transform: capitalize; ">9 to do so much</span>`,
            ],
          },
        ],
      },
      {
        label: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
          { imgUrl: `${assetPath}/dummyImg` }
        )}"/><span style="text-transform: capitalize; ">Textbooks question</span>`,
        id: '795',
        validations: ['required'],
        type: 'textbox',
        placeholder: 'Please enter',
      },
      {
        label: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
          { imgUrl: `${assetPath}/dummyImg` }
        )}"/><span style="text-transform: capitalize; ">6 to do so much</span>`,
        id: '795',
        validations: ['required'],
        type: 'textarea',
        placeholder: 'Please enter',
      },
    ],
  },
];


