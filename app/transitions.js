export default function() {
  var duration = 500;

  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('intro'),
  //   this.use('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toLeft', { duration } ]
  //   }),
  //   this.reverse('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toRight', { duration } ]
  //   })
  // );
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('lost-grid'),
  //   this.use('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toLeft', { duration } ]
  //   }),
  //   this.reverse('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toRight', { duration } ]
  //   })
  // );






  /* application */
  this.transition(
    this.fromRoute('application'),
    this.toRoute('index'),
    this.use('explode'),
    this.reverse('fade')
  );

  //   this.transition(
  //     this.fromRoute('index'),
  //     this.toRoute('why'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('why'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('platform'),
  //   this.use('toUp'),
  //   this.reverse('toDown')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('roadmap'),
  //   this.use('toRight'),
  //   this.reverse('toLeft')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('store'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('features'),
  //   this.use('fade'),
  //   this.reverse('fade')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('custom-services'),
  //   this.use('toRight'),
  //   this.reverse('toLeft')
  // ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('gallery'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('why'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('custom-services'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('profile'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('roadmap'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('next-steps'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('platform'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('store'),
    this.use('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-logo-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('next-steps'),
  //   this.use('toDown'),
  //   this.reverse('toUp')
  // ),
  // /* index */
  //
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('platform'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('roadmap'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  //
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('store'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  // this.transition(
  //   this.fromRoute('why'),
  //   this.toRoute('platform'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  //
  // this.transition(
  //   this.fromRoute('roadmap'),
  //   this.toRoute('next-steps'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // ),
  //

  /* Route 1 */

  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.unified-platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.cutting-edge-features'),
    this.use('fade'),
    this.reverse('fade')
  ),
  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.efficiency'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 2 */
  this.transition(
    this.fromRoute('platform'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 3 */
  this.transition(
    this.fromRoute('roadmap'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 4 */
  this.transition(
    this.fromRoute('platform'),
    this.toRoute('application'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform'),
    this.toRoute('platform.dashboard'),
    this.use('toUp'),
    this.reverse('toDown')
  ),
  this.transition(
    this.fromRoute('platform.dashboard'),
    this.toRoute('platform.estore'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.estore'),
    this.toRoute('platform.email'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.email'),
    this.toRoute('platform.crm'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.crm'),
    this.toRoute('platform.profile'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),

  /* Route 4 */
  this.transition(
    this.fromRoute('platform.profile'),
    this.toRoute('platform.content-curation'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.content-curation'),
    this.toRoute('platform.blog'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.blog'),
    this.toRoute('platform.calendar-events'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.calendar-events'),
    this.toRoute('platform.todos'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('platform.todos'),
    this.toRoute('platform.builder'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.builder'),
    this.toRoute('platform.analytics'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('platform.analytics'),
    this.toRoute('platform.messenger'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),



  this.transition(
    this.fromRoute('custom-services'),
    this.toRoute('custom-services.design'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),

  /* Route 9 */
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  // //example
  // this.transition(
  //   this.hasClass('band-description'),
  //   this.toValue(true),
  //   this.use('fade', { duration: 500 })
  // );
  // this.transition(
  //  this.childOf('.speaker-icons'),
  //  this.use('explode', {
  //    matchBy: 'data-speaker-id',
  //    use: ['flyTo', { duration, easing: [250, 15] } ]
  //  })
  // );

  //The DOPENESS ANIMATION!!!!///

  // var duration = 500;

  // this.transition(
  //   this.fromRoute('emberconf.speakers'),
  //   this.toRoute('emberconf.speaker'),
  //   this.use('explode', {
  //     matchBy: 'data-speaker-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toLeft', { duration } ]
  //   }),
  //   this.reverse('explode', {
  //     matchBy: 'data-speaker-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toRight', { duration } ]
  //   })
  // );
  }
