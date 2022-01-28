import macPic from 'assets/module1-mac.png'
import cellPic from 'assets/module1-cell.png'
import productAdsImg from 'assets/productAds-img.png'
import stoneProducts1 from 'assets/stoneProducts1.jpg'
import configAds1 from 'assets/configAds1.jpg'
import budgetAds from 'assets/budgetAds.jpg';
import multiCampaign from 'assets/multiCampaign1.jpg';
import campaignsInMl from 'assets/campaignsInMl.jpg';
import salesAdvice1 from 'assets/salesAdvice1.png';
import reputation1 from 'assets/reputation1.jpg';
import reputation2 from 'assets/reputation2.jpg';
import reputationAdvice1 from 'assets/reputationAdvice1.png';
import reputationAdvice2 from 'assets/reputationAdvice2.jpg';
import lightningOffers1 from 'assets/lightningOffers1.png';
import lightningOffers2 from 'assets/lightningOffers2.jpg';
import positioningAdvice1 from 'assets/positioningAdvice1.jpg';
import positioningAdvice2 from 'assets/positioningAdvice2.jpg';
import discountsGuide1 from 'assets/discountsGuide1.jpg';
import centralOffers1 from 'assets/centralOffers1.png';
import howToSell1 from 'assets/howToSell1.png';

const MODULES_CONTENT = [
    {
        id: 'adsExplanation.id',
        title: "adsExplanation.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "adsExplanation.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                    src: macPic,
                    alt: "adsExplanation.cardContents.s1.img-alt"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "adsExplanation.cardContents.s1.paragraph1"
                }
            },
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "title",
                    properties: {
                        title:  "adsExplanation.dropdown.s1.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "adsExplanation.dropdown.s1.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph:"adsExplanation.dropdown.s1.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "adsExplanation.dropdown.s1.paragraph3",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: cellPic,
                        alt: "adsExplanation.dropdown.s1.img-alt",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        color: "primary",
                        paragraph: "adsExplanation.dropdown.s1.paragraph4",
                    }
                }
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        title: "adsExplanation.dropdown.s2.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "adsExplanation.dropdown.s2.title",
                    }
                },
            ],
                s3:[
                    {
                        type: "title",
                        properties: {
                            title: "adsExplanation.dropdown.s3.title",
                            Tag: "h4",
                            color: "text"
                        }
                    },
                    {
                    type: "list",
                    properties: {
                        items: [
                            {content: "adsExplanation.dropdownContent.s1.list1.0"},
                            {content: "adsExplanation.dropdownContent.s1.list1.1"},
                            {content:  "adsExplanation.dropdownContent.s1.list1.2"},
                            {content:  "adsExplanation.dropdownContent.s1.list1.3"},
                            {content:  "adsExplanation.dropdownContent.s1.list1.4"}
                        ],
                        fontSize: "big",
                        colorBullet: "text"
                    }
                },
            ],
            s4:[
                {
                    type: "title",
                    properties: {
                        title:"adsExplanation.dropdown.s4.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "youtube-video",
                    properties: {
                        id: "xtjqkNzDv18",
                        width: "640px",
                        title: "mercado-ads youtube video"
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'productAds.id',
        title: "productAds.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "productAds.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "productAds.cardContents.s1.paragraph1"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "productAds.cardContents.s1.paragraph2"
                }
            },
            {
                type: "image",
                properties: {
                    src: productAdsImg,
                    alt: "productAds.cardContents.s1.img-alt"
                }
            },
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "title",
                    properties: {
                        title: "productAds.dropdownContent.s1.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "productAds.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {       
                        items: [
                            {content: "productAds.dropdownContent.s1.list1.0"},
                            {content: "productAds.dropdownContent.s1.list1.1"},
                            {content: "productAds.dropdownContent.s1.list1.2"},
                            {content: "productAds.dropdownContent.s1.list1.3"},
                            {content: "productAds.dropdownContent.s1.list1.4"},
                            {content: "productAds.dropdownContent.s1.list1.5"},
                            {content: "productAds.dropdownContent.s1.list1.6"},
                            {content: "productAds.dropdownContent.s1.list1.7"},
                            {content: "productAds.dropdownContent.s1.list1.8"},
                            {content: "productAds.dropdownContent.s1.list1.9"},
                            {content: "productAds.dropdownContent.s1.list1.10"},
                        ]
                    }
                },
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        title: "productAds.dropdownContent.s2.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "normal",
                        paragraph: "productAds.dropdownContent.s2.paragraph1"
                    }
                },
                {
                    type: "list",
                    properties: {       
                        items: [
                            {content: "productAds.dropdownContent.s2.list1.0"},
                            {content: "productAds.dropdownContent.s2.list1.1"},
                            {content: "productAds.dropdownContent.s2.list1.2"},
                        ]
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ],
        }  
    },
    {
        id: 'stoneProducts.id',
        title: "stoneProducts.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "stoneProducts.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                    src: stoneProducts1,
                    alt: "stoneProducts.cardContents.s1.img-alt"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "stoneProducts.cardContents.s1.paragraph1"
                }
            },
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "stoneProducts.dropdownContent.s1.paragraph1",
                    }
                }
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        title: "stoneProducts.dropdownContent.s2.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "stoneProducts.dropdownContent.s2.paragraph1"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "stoneProducts.dropdownContent.s2.paragraph2"
                    }
                }
            ],
            s3:[
                {
                    type: "title",
                    properties: {
                        title: "stoneProducts.dropdownContent.s3.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "stoneProducts.dropdownContent.s3.paragraph1"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "stoneProducts.dropdownContent.s3.paragraph2"
                    }
                },
                {
                    type: "youtube-video",
                    properties: {
                        id: "eC-p_leyXA4",
                        width: "640px",
                        title: "stone-products youtube"
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'configAds.id',
        title: "configAds.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "configAds.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                    src: configAds1,
                    alt: "configAds.cardContents.s1.img-alt"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "configAds.cardContents.s1.paragraph1"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "configAds.cardContents.s1.paragraph2"
                }
            },
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "title",
                        properties: {
                            title: "configAds.dropdownContent.s1.title",
                            Tag: "h4",
                            color: "text"
                        }
                    },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "configAds.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "configAds.dropdownContent.s1.paragraph2",
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "configAds.dropdownContent.s1.title2",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "configAds.dropdownContent.s1.paragraph3",
                    }
                }
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        title: "configAds.dropdownContent.s2.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "configAds.dropdownContent.s2.paragraph1"
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "configAds.dropdownContent.s2.list1.0"},
                            {content: "configAds.dropdownContent.s2.list1.1"},
                            {content: "configAds.dropdownContent.s2.list1.2"},
                        ],
                        colorBullet: "primary"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "configAds.dropdownContent.s2.paragraph2"
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ],
        }  
    },
    {
        id: 'budgetAds.id',
        title: "budgetAds.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "budgetAds.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "budgetAds.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "budgetAds.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "budgetAds.dropdownContent.s1.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "budgetAds.dropdownContent.s1.paragraph3",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "budgetAds.dropdownContent.s1.paragraph4",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: budgetAds,
                        alt: "budgetAds.cardContents.s1.img-alt"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "budgetAds.dropdownContent.s1.paragraph5",
                    }
                },
                {
                    type: "youtube-video",
                    properties: {
                        id: "I_10kSu9Baw",
                    }
                },
                ]}
    },
    {
        id: 'multiCampaigns.id',
        title: "multiCampaigns.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "multiCampaigns.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                    src: multiCampaign,
                    alt: "multiCampaigns.cardContents.s1.img-alt"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "normal",
                    lineHeight: "normal",
                    color: "primary",
                    paragraph: "multiCampaigns.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "title",
                        properties: {
                            title: "multiCampaigns.dropdownContent.s1.title",
                            Tag: "h4",
                            color: "text"
                        }
                    },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s1.title2",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s1.paragraph2",
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s1.title3",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s1.paragraph3",
                    }
                },
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s2.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s2.paragraph1"
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "multiCampaigns.dropdownContent.s2.list1.0"},
                            {content: "multiCampaigns.dropdownContent.s2.list1.1"},
                        ],
                        ListType: "ol"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "multiCampaigns.dropdownContent.s2.paragraph2"
                    }
                },
            ],
            s3: [
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s3.title",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s3.paragraph1"
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s3.title2",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s3.paragraph2"
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s3.title3",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s3.paragraph3"
                    }
                },
                {
                    type: "title",
                    properties: {
                        title: "multiCampaigns.dropdownContent.s3.title4",
                        Tag: "h4",
                        color: "text"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s3.paragraph4"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "multiCampaigns.dropdownContent.s3.paragraph5"
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'campaingsInMl.id',
        title: "campaingsInMl.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "campaingsInMl.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "campaingsInMl.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s1.paragraph2",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "campaingsInMl.dropdownContent.s1.list1.0"},
                            {content: "campaingsInMl.dropdownContent.s1.list1.1"},
                            {content: "campaingsInMl.dropdownContent.s1.list1.2"},
                        ],
                    }
                },
                ],
            s2:[ 
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s2.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s2.paragraph2",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "campaingsInMl.dropdownContent.s2.list1.0"},
                            {content: "campaingsInMl.dropdownContent.s2.list1.1"},
                            {content: "campaingsInMl.dropdownContent.s2.list1.2"},
                        ],
                    }
                },
            ],
            s3: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s3.paragraph1",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: campaignsInMl,
                        alt: "campaingsInMl.dropdownContent.s3.img-alt"
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s3.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "campaingsInMl.dropdownContent.s3.paragraph3",
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'salesAdvice.id',
        title: "salesAdvice.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "salesAdvice.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "salesAdvice.cardContents.s1.paragraph1"
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "salesAdvice.cardContents.s1.paragraph2"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "salesAdvice.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "salesAdvice.dropdownContent.s1.list1.0"},
                            {content: "salesAdvice.dropdownContent.s1.list1.1"},
                        ],
                    }
                },
                ],
            s2:[ 
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "salesAdvice.dropdownContent.s2.paragraph1",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: salesAdvice1,
                        alt: "salesAdvice.dropdownContent.s2.img-alt",
                        styles: {"width": "50%", "margin": "0 auto"}
                    }
                }
            ],
            s3: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "salesAdvice.cardContents.s1.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "salesAdvice.dropdownContent.s3.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "salesAdvice.dropdownContent.s3.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "salesAdvice.dropdownContent.s3.paragraph3",
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'reputationInMl.id',
        title: "reputationInMl.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "reputationInMl.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "reputationInMl.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "reputationInMl.dropdownContent.s1.title"
                        } 
                    },
                    {
                        type: "image",
                        properties: {
                            src: reputation1,
                            alt: "reputationInMl.dropdownContent.s1.img-alt",
                            styles: {"width": "40%", "margin": "0 auto 0 0"}
                        }
                    },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationInMl.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "reputationInMl.dropdownContent.s1.list1.0"},
                            {content: "reputationInMl.dropdownContent.s1.list1.1"},
                            {content: "reputationInMl.dropdownContent.s1.list1.2"},
                        ],
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationInMl.dropdownContent.s1.paragraph2",
                    }
                },
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationInMl.dropdownContent.s2.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "big",
                        lineHeight: "big",
                        paragraph: "reputationInMl.dropdownContent.s2.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "reputationInMl.dropdownContent.s2.list1.0"},
                            {content: "reputationInMl.dropdownContent.s2.list1.1"},
                            {content: "reputationInMl.dropdownContent.s2.list1.2"},
                            {content: "reputationInMl.dropdownContent.s2.list1.3"},
                        ],
                    }
                },
            ],
            s3: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationInMl.dropdownContent.s3.title"
                    } 
                },
                {
                    type: "image",
                    properties: {
                        src: reputation2,
                        alt: "reputationInMl.dropdownContent.s3.img-alt",
                        styles: {"width": "60%", "margin": "0 auto 0 0"}

                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "reputationInMl.dropdownContent.s3.list1.0"},
                            {content: "reputationInMl.dropdownContent.s3.list1.1"},
                            {content: "reputationInMl.dropdownContent.s3.list1.2"},
                            {content: "reputationInMl.dropdownContent.s3.list1.3"},
                        ],
                    }
                }
            ],
            s4: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationInMl.dropdownContent.s4.title"
                    } 
                },
                
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationInMl.dropdownContent.s4.paragraph1",
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'reputationAdvice.id',
        title: "reputationAdvice.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "reputationAdvice.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                    src: reputation2,
                    alt: "reputationAdvice.cardContents.s1.img-alt",
                    styles: {"width": "60%", "margin": "0 auto"}

                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "reputationAdvice.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationAdvice.dropdownContent.s1.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationAdvice.dropdownContent.s1.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "normal",
                        paragraph: "reputationAdvice.dropdownContent.s1.paragraph3",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: reputationAdvice1,
                        alt: "reputationAdvice.cardContents.s1.img-alt",
                        styles: {"width": "60%", "margin": "0 auto"}
    
                    }
                },
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationAdvice.dropdownContent.s2.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s2.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "reputationAdvice.dropdownContent.s2.list1.0"},
                            {content: "reputationAdvice.dropdownContent.s2.list1.1"},
                            {content: "reputationAdvice.dropdownContent.s2.list1.2"},
                            {content: "reputationAdvice.dropdownContent.s2.list1.3"},
                        ],
                    }
                },
            ],
            s3: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationAdvice.dropdownContent.s3.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s3.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s3.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s3.paragraph3",
                    }
                }
            ],
            s4: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationAdvice.dropdownContent.s4.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s4.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s4.paragraph2",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s4.paragraph3",
                    }
                }
            ],
            s5: [
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "reputationAdvice.dropdownContent.s5.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s5.paragraph1",
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s5.paragraph2",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: reputationAdvice2,
                        alt: "reputationAdvice.cardContents.s5.img-alt",
                        styles: {"width": "60%", "margin": "0 auto"}
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'lightningOffers.id',
        title: "lightningOffers.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "lightningOffers.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "lightningOffers.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "list",
                        properties: {
                            items: [
                                {content: "lightningOffers.dropdownContent.s1.list1.0"},
                                {content: "lightningOffers.dropdownContent.s1.list1.1"},
                                {content: "lightningOffers.dropdownContent.s1.list1.2"},
                            ],
                        }
                    },
                    {
                        type: "image",
                        properties: {
                            src: lightningOffers1,
                            alt: "lightningOffers.cardContents.s1.img-alt",
                            styles: {"width": "60%", "margin": "0 auto"}
        
                        }
                    },
                ],
            s2:[ 
                {
                    type: "title",
                    properties: {
                        Tag: "h4",
                        color: "text",
                        title: "lightningOffers.dropdownContent.s2.title"
                    } 
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "lightningOffers.dropdownContent.s2.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "lightningOffers.dropdownContent.s2.list1.0"},
                            {content: "lightningOffers.dropdownContent.s2.list1.1"},
                            {content: "lightningOffers.dropdownContent.s2.list1.2"},
                        ],
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "lightningOffers.dropdownContent.s2.paragraph2",
                    }
                }
            ],
            s3: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "lightningOffers.dropdownContent.s3.paragraph1",
                    }
                },
                {
                    type: "list",
                    properties: {
                        items: [
                            {content: "lightningOffers.dropdownContent.s3.list1.0"},
                            {content: "lightningOffers.dropdownContent.s3.list1.1"},
                            {content: "lightningOffers.dropdownContent.s3.list1.2"},
                        ],
                    }
                },
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "lightningOffers.dropdownContent.s3.paragraph2",
                    }
                },
                {
                    type: "image",
                    properties: {
                        src: lightningOffers2,
                        alt: "lightningOffers.cardContents.s5.img-alt",
                        styles: {"width": "60%", "margin": "0 auto"}
                    }
                },
            ],
            s4: [
                {
                    type: "paragraph",
                    properties: {
                        fontSize: "normal",
                        lineHeight: "notmal",
                        paragraph: "reputationAdvice.dropdownContent.s4.paragraph1",
                    }
                },
                {
                    type: "youtube-video",
                    properties: {
                        id: "51VFZnvZgcI",
                    }
                },
                {
                    type: "spacer",
                    properties: {
                        type: "vertical",
                        size: "120px"
                    }
                }
            ]
        }  
    },
    {
        id: 'positioningAdvice.id',
        title: "positioningAdvice.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "positioningAdvice.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "positioningAdvice.cardContents.s1.paragraph1"
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "image",
                        properties: {
                           src: positioningAdvice1,
                           alt: "positioningAdvice.cardContents.s1.img-alt",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "positioningAdvice.dropdownContent.s1.paragraph1",
                        }
                    },
                    {
                        type: "image",
                        properties: {
                            src: positioningAdvice2,
                            alt: "positioningAdvice.cardContents.s1.img-alt2",
                            styles: {"width": "60%", "margin": "0 auto"}
        
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "positioningAdvice.dropdownContent.s1.paragraph2",
                        }
                    },
                    {
                        type: "list",
                        properties: {
                            items: [
                                {content: "positioningAdvice.dropdownContent.s1.list1.0"},
                                {content: "positioningAdvice.dropdownContent.s1.list1.1"},
                                {content: "positioningAdvice.dropdownContent.s1.list1.2"},
                            ],
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "positioningAdvice.dropdownContent.s.paragraph3",
                        }
                    },
                    {
                        type: "spacer",
                        properties: {
                            type: "vertical",
                            size: "120px"
                        }
                    }
                ]
        }  
    },
    {
        id: 'discountsGuide.id',
        title: "discountsGuide.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "discountsGuide.cardContents.s1.title"
                } 
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "big",
                    lineHeight: "big",
                    paragraph: "discountsGuide.cardContents.s1.paragraph1"
                }
            },
            {
                type: "image",
                properties: {
                   src: discountsGuide1,
                   alt: "discountsGuide.cardContents.s1.img-alt",
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "discountsGuide.cardContents.s1.title"
                        } 
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "discountsGuide.dropdownContent.s1.paragraph1",
                        }
                    },
                    {
                        type: "list",
                        properties: {
                            items: [
                                {content: "discountsGuide.dropdownContent.s1.list1.0"},
                                {content: "discountsGuide.dropdownContent.s1.list1.1"},
                                {content: "discountsGuide.dropdownContent.s1.list1.2"},
                            ],
                        }
                    },
                ],
                s2:[
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "discountsGuide.dropdownContent.s2.title"
                        } 
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "discountsGuide.dropdownContent.s2.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "discountsGuide.dropdownContent.s2.paragraph2",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "discountsGuide.dropdownContent.s2.paragraph3",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "discountsGuide.dropdownContent.s2.paragraph4",
                        }
                    },
                    {
                        type: "list",
                        properties: {
                            items: [
                                {content: "discountsGuide.dropdownContent.s2.list1.0"},
                                {content: "discountsGuide.dropdownContent.s2.list1.1"},
                                {content: "discountsGuide.dropdownContent.s2.list1.2"},
                            ],
                        }
                    },
                    {
                        type: "spacer",
                        properties: {
                            type: "vertical",
                            size: "120px"
                        }
                    }
                ]
        }  
    },
    {
        id: 'centralOffersGuide.id',
        title: "centralOffersGuide.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "centralOffersGuide.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                   src: centralOffers1,
                   alt: "centralOffersGuide.cardContents.s1.img-alt",
                }
            }
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s1.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s1.paragraph2",
                        }
                    }
                ],
                s2:[
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "centralOffersGuide.dropdownContent.s2.title"
                        } 
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s2.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s2.paragraph2",
                        }
                    }
                ],
                s3:  [
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "centralOffersGuide.dropdownContent.s3.title"
                        } 
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s3.paragraph1",
                        }
                    },
                ],
                s4:  [
                    {
                        type: "title",
                        properties: {
                            Tag: "h4",
                            color: "text",
                            title: "centralOffersGuide.dropdownContent.s4.title"
                        } 
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s4.paragraph1",
                        }
                    },
                    {
                        type: "youtube-video",
                        properties: {
                            id: "51VFZnvZgcI",
                        }
                    },
                    {
                        type: "spacer",
                        properties: {
                            type: "vertical",
                            size: "120px"
                        }
                    }
                ]
        }  
    },
    {
        id: 'howToSell.id',
        title: "howToSell.cardContents.s1.title",
        cardContent: {
            s1: [
            {
                type: "title",
                properties: {
                    Tag: "h3",
                    color: "text",
                    title: "howToSell.cardContents.s1.title"
                } 
            },
            {
                type: "image",
                properties: {
                   src: howToSell1,
                   alt: "howToSell.cardContents.s1.img-alt",
                }
            },
            {
                type: "paragraph",
                properties: {
                    fontSize: "normal",
                    lineHeight: "notmal",
                    paragraph: "howToSell.cardContents.s1.paragraph1",
                }
            },
        ]},
        dropdownContent: {
                s1: [
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s1.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s1.paragraph2",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s1.paragraph3",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s1.paragraph4",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s1.paragraph5",
                        }
                    }
                ],
                s2:[
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s2.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "centralOffersGuide.dropdownContent.s2.paragraph2",
                        }
                    }
                ],
                s3:  [
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s3.paragraph1",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s3.paragraph2",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s3.paragraph3",
                        }
                    },
                    {
                        type: "paragraph",
                        properties: {
                            fontSize: "normal",
                            lineHeight: "notmal",
                            paragraph: "howToSell.dropdownContent.s3.paragraph4",
                        }
                    },
                ],
        }  
    },
]

export default MODULES_CONTENT;