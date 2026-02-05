export const MenuData = [
  {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "Mansarovar Sweets",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "103731",
                name: "Mansarovar Sweets",
                city: "Bokaro",
                slugs: {
                  restaurant: "mansarovar-food-plaza-city-centre-city-centre",
                  city: "bokaro",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId: "zlbg7ordvuiyavvqrfho",
                locality: "City Centre",
                areaName: "City Centre",
                costForTwo: "25000",
                costForTwoMessage: "₹250 for two",
                cuisines: ["Sweets", "South Indian"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "103731",
                  fees: [{}],
                },
                parentId: "132287",
                avgRatingString: "4.3",
                totalRatingsString: "14K+ ratings",
                sla: {
                  restaurantId: "103731",
                  deliveryTime: 36,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 40,
                  lastMileTravel: 6.8,
                  serviceability: "SERVICEABLE",
                  stressFactor: 1,
                  rainMode: "RAIN_MODE_NONE",
                  longDistance: "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                  zoneId: 1023,
                  slaString: "35-40 MINS",
                  lastMileTravelString: "6.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2026-02-05 21:59:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: "Get items under 45",
                  shortDescriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "60% off | Use TRYNEW",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "60% off up to ₹120 | Use code TRYNEW",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "mansarovar-food-plaza-city-centre-city-centre",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message:
                      "Plot No.GD 4/5, City Center, Sector 4, Bokaro Steel City, Jharkhand 827004",
                  },
                  {
                    title: "Cuisines",
                    message: "Sweets,South Indian",
                  },
                ],
                totalRatings: 14000,
                aggregatedDiscountInfoV2: {
                  header: "Get items under 45",
                  shortDescriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "60% off | Use TRYNEW",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "60% off up to ₹120 | Use code TRYNEW",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                nudgeBanners: [
                  {
                    priority: 19,
                    discountInfo: {
                      discountType: "FinalPrice",
                      value: 149,
                    },
                    unlockedMessage: "Deal of the Day unlocked!",
                    minItemCount: 1,
                    maxItemCount: 1,
                    type: "SILD",
                    nudgeTagInfo: {
                      title: "Deal of the Day",
                      fontName: "FONT_NAME_CONDENSED_BOLD",
                    },
                    logoCtx: {},
                    movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                  },
                ],
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/103731",
                },
                ratingSlab: "RATING_SLAB_5",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                  commsStyling: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "23.66590139904794,86.14583118247565",
                backgroundImageOverlayInfo: {},
                featuredSectionInfo: {},
                requestContexts: ["enable_ecosaver", "99store"],
              },
              analytics: {},
            },
            relevance: {
              type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
              sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 5,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
              },
              id: "offerCollectionWidget_UX4",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "ITEMS AT ₹49",
                        offerTag: "DEAL OF DAY",
                        offerTagColor: "#E46D47",
                        offerIds: ["b7b63759-4917-4000-8064-26d4d7a3a527"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        description: "ON SELECT ITEMS |",
                        offerType: "offers",
                        restId: "103731",
                        offerLogo: "offers/DealRush_Offer_Icon.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "60% OFF UPTO ₹120",
                        offerTagColor: "#E46D47",
                        offerIds: ["b0b82717-b286-4985-8fe3-6918bce46e96"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE TRYNEW",
                        description: "ABOVE ₹129",
                        offerType: "offers",
                        restId: "103731",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE TRYNEW",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹150 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["ad270d6a-e9dd-4924-8b59-975ec78b445e"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE SAVERDEAL",
                        description: "ABOVE ₹349",
                        offerType: "offers",
                        restId: "103731",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE SAVERDEAL",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹175 OFF",
                        offerTag: "DEFAULT",
                        offerTagColor: "#E46D47",
                        offerIds: ["f543231b-de02-48fa-b5e4-527b2a62dc97"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE MEGASAVER",
                        description: "ABOVE ₹699",
                        offerType: "offers",
                        restId: "103731",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE MEGASAVER",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "7.5% OFF UPTO ₹100",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/31/a7854ae9-0ce6-4dee-b5e5-7dc038a1574f_YESBankMenuLogoNew1.png",
                        offerIds: ["2a1dfb49-3abf-4387-891e-23dc9cb7a1dd"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "NO CODE REQUIRED",
                        description: "ABOVE ₹399",
                        offerType: "offers",
                        restId: "103731",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/31/a7854ae9-0ce6-4dee-b5e5-7dc038a1574f_YESBankMenuLogoNew1.png",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "NO CODE REQUIRED",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        badges: {},
                        vegOnlyDetails: {
                          imageId: "AutoVegOnly_qkjowj",
                          title: "Showing only vegetarian options.",
                          description:
                            "Tap on the VEG ONLY button to turn off the setting",
                        },
                        topRatedFilter: {
                          attributes: {
                            displayText: "Ratings 4.0+",
                          },
                        },
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: "Kids Favourites",
                            tooltip: {
                              enabled: true,
                              displayText:
                                "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: "VEG",
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: "NONVEG",
                          },
                        },
                      },
                      relevance: {
                        type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        sectionId: "MENU_FILTER_TOGGLE",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                        title: "Top Picks",
                        carousel: [
                          {
                            type: "TopCarousel",
                            subtype: "image",
                            bannerId: "7696998",
                            creativeId: "TopPicks2024/28796877F.png",
                            title: "Paneer Butter Masala",
                            description: " ",
                            fontColor: "#FFFFFF",
                            dish: {
                              info: {
                                id: "28796877",
                                name: "Paneer Butter Masala",
                                category: "Paneer main course",
                                description:
                                  "Chunks of cottage cheese cooked in dense butter rich gravy if onion, tomatoes and spices.",
                                imageId: "tqggkffnnengfudnjapb",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520677",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520676",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                itemBadge: {},
                                badgesV2: {},
                                itemPriceStrikeOff: true,
                                parentId: "48758472",
                              },
                              analytics: {},
                              restaurant: {
                                info: {
                                  dishStyle: {
                                    socialMarkerStyle: [
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                        title: "Protein Rich",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "brand_proteinator_primary",
                                      },
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_BESTSELLER",
                                        title: "Bestseller",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "color_swiggy_one",
                                      },
                                    ],
                                  },
                                },
                              },
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            type: "TopCarousel",
                            subtype: "image",
                            bannerId: "5532826",
                            creativeId: "TopPicks2024/72059570E.png",
                            title: "Babycorn Chilli",
                            description: " ",
                            fontColor: "#FFFFFF",
                            dish: {
                              info: {
                                id: "72059570",
                                name: "Babycorn Chilli",
                                category: "Chinese",
                                description:
                                  "Spice up your taste buds with our babycorn chilli. crispy and flavorful, it's the perfect snack for a delightful kick",
                                imageId: "3039b4a96c460c7983e5acfd78f96630",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211963",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899757",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899758",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                itemBadge: {},
                                badgesV2: {},
                                itemPriceStrikeOff: true,
                                parentId: "107983650",
                              },
                              analytics: {},
                              restaurant: {
                                info: {
                                  dishStyle: {
                                    socialMarkerStyle: [
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                        title: "Protein Rich",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "brand_proteinator_primary",
                                      },
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_BESTSELLER",
                                        title: "Bestseller",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "color_swiggy_one",
                                      },
                                    ],
                                  },
                                },
                              },
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            type: "TopCarousel",
                            subtype: "image",
                            bannerId: "5533571",
                            creativeId: "TopPicks2024/72059571E.png",
                            title: "Chilli Paneer",
                            description: " ",
                            fontColor: "#FFFFFF",
                            dish: {
                              info: {
                                id: "72059571",
                                name: "Chilli Paneer",
                                category: "Chinese",
                                description:
                                  "Paneer cubes marinated in soy sauce, chilli sauce and pepper, deep fried until crisp and cooked in soy sauce, green chilli, tomato puree, onion and bell peppers",
                                imageId: "lpqylbpznebyfsqtuz3n",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633809",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046503",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 7500,
                                          id: "35046504",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "11211923",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899664",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899665",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "220828419",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "64267858",
                                        name: "Onion salad",
                                        price: 7900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                itemPriceStrikeOff: true,
                                parentId: "107983654",
                              },
                              analytics: {},
                              restaurant: {
                                info: {
                                  dishStyle: {
                                    socialMarkerStyle: [
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                        title: "Protein Rich",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "brand_proteinator_primary",
                                      },
                                      {
                                        socialMarkerType:
                                          "SOCIAL_MARKER_TYPE_BESTSELLER",
                                        title: "Bestseller",
                                        textStyle:
                                          "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                        textColor: "color_swiggy_one",
                                      },
                                    ],
                                  },
                                },
                              },
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "36795337",
                                name: "Samosa [1 Pc]",
                                category: "Snacks",
                                description:
                                  "Classic indian snacks, crispy and flavorful.",
                                imageId: "oacplaiqapi1sg2usukz",
                                inStock: 1,
                                isVeg: 1,
                                price: 2200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "569 ratings",
                                    ratingCountV2: "569",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "69294664",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056968",
                                name: "Paneer Butter Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Crispy crepe made from coarsely ground mix of rice, split black gram, beaten rice and fenugreek, center-filled with spicy paneer masala. served with",
                                imageId: "8a91f371710831bf0a9f8460537b0ca8",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                finalPrice: 12900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500189",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500191",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "307 ratings",
                                    ratingCountV2: "307",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "b6fbc1d7-d6dd-438f-b4e8-fc558b21ac79",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "67685150",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "63189015",
                                name: "Gud Rasmalai [2 Pieces]",
                                category: "Dessert",
                                description:
                                  "Cottage cheese dumplings slow-cooked in milk rabri you just can't resist!",
                                imageId: "wrqrtkwa5hfjjjnygr7q",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126177",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "72 ratings",
                                    ratingCountV2: "72",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983658",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858989",
                                name: "Kaju Barfi [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Its made with combination of roasted kaju with sugar garnish with silver",
                                imageId: "lggiyez9b4ahvqiimysz",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126149",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "50 ratings",
                                    ratingCountV2: "50",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983663",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117506",
                                name: "Kala Kand [1 Piece]",
                                category: "Sweets",
                                description:
                                  "Delight in this indulgent vegetarian sweet treat, bursting with rich flavors and creamy texture.",
                                imageId: "yeicuhfz9vt9j9lpgfak",
                                inStock: 1,
                                isVeg: 1,
                                price: 3000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "116301782",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858991",
                                name: "Rasgulla [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Soft and spongy cottage cheese balls soaked in sweet syrup",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/ba70fcc7-d504-4f98-8936-e26f6841a121_6ac94b15-84ed-4ca3-a6ba-f6652f5abdd4.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126164",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "104 ratings",
                                    ratingCountV2: "104",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983674",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858990",
                                name: "Hot Gulab Jamun [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Satisfy your cravings with this yummy hot gulab jamun",
                                imageId: "gilljlwffjaytb9a7y77",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983661",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        type: "CATEGORY_TYPE_RECOMMENDED",
                        subtitleSuffix: {},
                        categoryId: "-1",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Misti Dahi",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72060467",
                                name: "Misti Dahi 250gm",
                                category: "Misti Dahi",
                                description:
                                  "Serves 1 | Misti dahi- a sweet and creamy yogurt-based dessert.",
                                imageId: "87995f7fab8a96e192764426c50d6811",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "194 ratings",
                                    ratingCountV2: "194",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758453",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "87995f7fab8a96e192764426c50d6811",
                        categoryId: "15287406",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sandwich",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71866490",
                                name: "Veg Grilled Sandwich",
                                category: "Sandwich",
                                description:
                                  "A bombay staple, loaded with veggies, cheese and our delicious chutney. (serves 1)",
                                imageId: "82885a06bfe39f517b7b86255ff9e0f9",
                                inStock: 1,
                                isVeg: 1,
                                price: 13900,
                                finalPrice: 9500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "6ccd2039-535c-4766-94e4-609e46c5daf1",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "48758496",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71866492",
                                name: "Paneer Grilled Sandwich",
                                category: "Sandwich",
                                description:
                                  "A delightfully delicious grilled sandwich made with chunks of paneer, corriander, lemon chutney and tummy full of loaded cheese, serves one to two.",
                                imageId: "9e8398df9dca4ebd5d2e5641cb8a1931",
                                inStock: 1,
                                isVeg: 1,
                                price: 17900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "30 ratings",
                                    ratingCountV2: "30",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758475",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71866494",
                                name: "Veg Cheese Sandwich",
                                category: "Sandwich",
                                description:
                                  "Serves 1 | Hearty sandwich stuffed generously with assorted seasoned vegetables, cheese and grilled",
                                imageId: "0ee4eb9a1603ebd83b4981bbe6152a7f",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.1",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "53074609",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "82885a06bfe39f517b7b86255ff9e0f9",
                        categoryId: "15216415",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Snacks",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "158787982",
                                name: "Chole Bhature [2 Pieces]",
                                category: "Snacks",
                                description:
                                  "Spicy Chickpeas served with deep fried fluffy bhature .",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/11/8f402927-ef3e-4923-a26c-3270281b1486_a98a2fe6-e02f-4949-b0c2-ba852e11cecb.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                finalPrice: 8500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269623806",
                                    groupName: "Extras",
                                    choices: [
                                      {
                                        id: "22650622",
                                        name: "Extra Onion",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839198",
                                        name: "Extra Chole",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839191",
                                        name: "Extra Bhature [1 Piece]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 4,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "141 ratings",
                                    ratingCountV2: "141",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "0aa0cd27-b646-45b5-bc1f-c8e5c7738b4b",
                                ],
                                parentId: "108057547",
                                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                offerHeader: "Only till",
                                offerSubHeader: "2:00 PM",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "36795334",
                                name: "Paneer Samosa",
                                category: "Snacks",
                                description:
                                  "An all time favourite, bite into this crispy samosa that comes with a flavour-packed shahi paneer filling!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/88602f5e-1195-4ddb-b46b-a9ec4304ec52_d47f4947-b407-45b1-84f2-07c115c3989a.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 3500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "141 ratings",
                                    ratingCountV2: "141",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758477",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "36795337",
                                name: "Samosa [1 Pc]",
                                category: "Snacks",
                                description:
                                  "Classic indian snacks, crispy and flavorful.",
                                imageId: "oacplaiqapi1sg2usukz",
                                inStock: 1,
                                isVeg: 1,
                                price: 2200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "569 ratings",
                                    ratingCountV2: "569",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "69294664",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71864181",
                                name: "Dhokla [1 Pieces]",
                                category: "Snacks",
                                description:
                                  "Soft, spongy and flavorful, this quintessential Indian snack is a veggie lover's delight!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/303a1458-9742-44f3-b7f8-0b4750347648_a8539c82-92d8-401f-99f7-9b78977e0365.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 2400,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "32 ratings",
                                    ratingCountV2: "32",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "108057555",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71864190",
                                name: "Kachori Sabji [2 Pieces]",
                                category: "Snacks",
                                description:
                                  "A delectable duo of crispy, flavor-packed Kachori and delectable Sabji, perfect for satisfying snack cravings.",
                                imageId: "ywkdiuzw7azau8spxgx8",
                                inStock: 1,
                                isVeg: 1,
                                price: 4400,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "36 ratings",
                                    ratingCountV2: "36",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "108057557",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "107570071",
                                name: "Samosa [5 Pieces]",
                                category: "Snacks",
                                description:
                                  "Classic indian snacks, crispy and flavorful.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/f8532f1f-6c77-4621-8815-da189a00c991_fe9e4b53-6ec1-4925-b41d-c115e6d4a889.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                finalPrice: 7500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "253174885",
                                    groupName: "Chutney",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "43 ratings",
                                    ratingCountV2: "43",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "013217a9-5de2-42b6-bd6d-752ddbbd5eef",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "108057558",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "135537891",
                                name: "Vegtable Chop",
                                category: "Snacks",
                                description:
                                  "A delightful and flavorful snack packed with assorted vegetables.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/c3e32014-58f3-483c-b1ef-d6422d6b9dde_72b52473-8476-42dc-b79a-b3ce1c6a84a7.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 2400,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "103 ratings",
                                    ratingCountV2: "103",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "79406756",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "153354295",
                                name: "Kachori [5 Pieces]",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/ee9d5deb-a82e-4796-8865-cefdc2430bbb_652ab8c4-134e-42f7-bb56-280aac33d5de.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                finalPrice: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "013217a9-5de2-42b6-bd6d-752ddbbd5eef",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "108057556",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "158787993",
                                name: "Chole Bhature [1 Pieces]",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/1d1c1fd9-a68b-4f81-a201-e0a894d51c2a_24997ce1-c726-4670-817e-f3b961ec8d6f.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                finalPrice: 5500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269623596",
                                    groupName: "Add-on",
                                    choices: [
                                      {
                                        id: "22650622",
                                        name: "Extra Onion",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839198",
                                        name: "Extra Chole",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839191",
                                        name: "Extra Bhature [1 Piece]",
                                        price: 4900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269623597",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "c52a77d8-b334-469e-b3e5-278e66172ee3",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "108057546",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/6/11/8f402927-ef3e-4923-a26c-3270281b1486_a98a2fe6-e02f-4949-b0c2-ba852e11cecb.jpg_compressed",
                        categoryId: "15215736",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "South Indian",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797000",
                                name: "Plain Dosa",
                                category: "South Indian",
                                description:
                                  "A wholesome meal with flavor-packed crispy plain dosa; served along with subtly spiced chutney and all time favorite sambhar.",
                                imageId: "3ee449fa0ae50a0b5a9a0e2f9635966f",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                finalPrice: 7900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500051",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500050",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "91 ratings",
                                    ratingCountV2: "91",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "2b628827-e35b-4c69-940a-6a807be4aba7",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "49889994",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056961",
                                name: "Sambar Vada [2 Pieces]",
                                category: "South Indian",
                                description:
                                  "Serves 1 | A delectable meal with crunchy vada, served along with a subtly spiced chutney and the all time favorite sambhar.",
                                imageId: "ulairj620fkhakivjnro",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500154",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "28 ratings",
                                    ratingCountV2: "28",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "b7b63759-4917-4000-8064-26d4d7a3a527",
                                ],
                                parentId: "107983677",
                                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                offerHeader: "Only till",
                                offerSubHeader: "2:00 PM",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797020",
                                name: "Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Masala dosa is crisp and soft dosa mixed with potato stuffing.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/b59a3647-b29c-4c6a-83c0-9d5ee53b33b1_14722fa0-75e8-4f6b-be81-e9d1aa311032.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                finalPrice: 8900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269521881",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269521882",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "1197 ratings",
                                    ratingCountV2: "1.2K+",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "17f3b323-128e-49f9-b794-25159efffce3",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "48758449",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117449",
                                name: "Idli [2 Pieces]",
                                category: "South Indian",
                                description:
                                  "A traditional South Indian delight featuring soft, fluffy idlies served with flavorful sambar, a perfect dish to start your day!",
                                imageId: "af06ede3d3eb474b7387f9128e08edfb",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "268924640",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "91 ratings",
                                    ratingCountV2: "91",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107983662",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056971",
                                name: "Onion Butter Plain Dosa",
                                category: "South Indian",
                                description:
                                  "A thin, crispy south indian rice crepe with a flavorful twist of onions and butter.",
                                imageId: "9b88b504e7d302b0881f61d3431b66c8",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500100",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500102",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49889993",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797021",
                                name: "Onion Butter Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Crispy and delicious dosa folded in with masala and topped with onions. serves 1-2",
                                imageId: "49017ef6c68cade8cdf20d41c802c21d",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                finalPrice: 11900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "245410245",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "22650622",
                                        name: "Extra Onion",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500148",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500149",
                                    groupName: "Extras",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "56c1dd8b-0a44-4e5d-9405-63c0cb11fd8d",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107983669",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056969",
                                name: "Paneer Butter Plain Dosa",
                                category: "South Indian",
                                description:
                                  "A South Indian delicacy, try out this crispy masala dosa with a yummy filling of potatoes and masala!",
                                imageId: "8a91f371710831bf0a9f8460537b0ca8",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500163",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500165",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "46 ratings",
                                    ratingCountV2: "46",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758473",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056968",
                                name: "Paneer Butter Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Crispy crepe made from coarsely ground mix of rice, split black gram, beaten rice and fenugreek, center-filled with spicy paneer masala. served with",
                                imageId: "8a91f371710831bf0a9f8460537b0ca8",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                finalPrice: 12900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269500189",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269500191",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "307 ratings",
                                    ratingCountV2: "307",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "b6fbc1d7-d6dd-438f-b4e8-fc558b21ac79",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "67685150",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797024",
                                name: "Mansarovar Special Masala dosa",
                                category: "South Indian",
                                description:
                                  "A distinctive and flavorful south indian dosa with a special masala filling, offering a unique culinary experience.",
                                imageId: "lhowpaivb2wycfbme3ma",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                finalPrice: 14900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "253077221",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269501027",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "137 ratings",
                                    ratingCountV2: "137",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "924a784e-3b6a-4920-9e8a-5e3e9b24671c",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "49071484",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797022",
                                name: "Butter Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Butter Masala dosa is crisp and soft dosa mixed with potato stuffing with add on of Butter",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/31/9d63430f-f98b-4209-9f9c-3a749c880c7e_957455a2-e323-473b-82e8-354d753300d1.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 18900,
                                finalPrice: 12500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269501032",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269501033",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "b967860c-0060-4d2f-81e7-9fd2e1e887bf",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "111425770",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "3ee449fa0ae50a0b5a9a0e2f9635966f",
                        categoryId: "3641351",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Dessert",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117434",
                                name: "Chena Payas (1 Pc)",
                                category: "Dessert",
                                description:
                                  "A sweet and creamy indian dessert made with chena (paneer).",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/7ba57609-b1e3-488d-b4b2-8df177a2277f_cfcc0789-9f46-4ccf-874d-da969c63797a.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "75 ratings",
                                    ratingCountV2: "75",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49577350",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117523",
                                name: "Rasgulla [2 Pieces]",
                                category: "Dessert",
                                description:
                                  "Serves 1 | Soft and spongy cottage cheese balls soaked in sweet syrup",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5d4844cd-4a3c-4752-baa9-a9543c2004ff_89b48854-29ee-4f38-b475-a25717b0557c.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 6000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126110",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "15 ratings",
                                    ratingCountV2: "15",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983673",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58547995",
                                name: "Rasgulla Big [2 Pieces]",
                                category: "Dessert",
                                description:
                                  "Soft and spongy cottage cheese balls soaked in sweet syrup",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/90087cac-10e2-4c70-a154-9b8563e7c497_d83eb522-0166-4ac4-8491-206a53c94027.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126123",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "35 ratings",
                                    ratingCountV2: "35",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983675",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117432",
                                name: "Rasmalai [2 Pieces]",
                                category: "Dessert",
                                description: "Sweet and creamy dessert",
                                imageId: "wbrcocxxpmyup34i4n4r",
                                inStock: 1,
                                isVeg: 1,
                                price: 20000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125121",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "65 ratings",
                                    ratingCountV2: "65",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983676",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "63189015",
                                name: "Gud Rasmalai [2 Pieces]",
                                category: "Dessert",
                                description:
                                  "Cottage cheese dumplings slow-cooked in milk rabri you just can't resist!",
                                imageId: "wrqrtkwa5hfjjjnygr7q",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126177",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "72 ratings",
                                    ratingCountV2: "72",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983658",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "148008635",
                                name: "Hot Gulab Jamun [2 Pieces]",
                                category: "Dessert",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/1/14/90a6d613-a333-4350-a02e-28cd00dbd335_56f89d62-8dc6-4dba-a0fb-719854ef6902.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 10000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "15 ratings",
                                    ratingCountV2: "15",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983660",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "179385176",
                                name: "Dry Gulab Jamun [5 Pieces]",
                                category: "Dessert",
                                description:
                                  "Indulge in these delightful, golden-brown spheres, offering a rich, sweet flavor that melts in your mouth.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/26/af6613b1-540e-40bb-9a74-8c9f7e1c8441_f21e7068-87d4-4367-9e20-131e20794718.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "116301781",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "179385185",
                                name: "Dry Gulab Jamun [2 Pieces]",
                                category: "Dessert",
                                description:
                                  "Indulge in these delightful bites, featuring a rich, sweet flavor and a perfectly dry, melt-in-your-mouth texture.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/26/09965112-60d0-42c9-b366-03bb337315dc_69f86ffe-521a-4ceb-9a95-f19473bb5be7.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 6000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "116301780",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/8/2/7ba57609-b1e3-488d-b4b2-8df177a2277f_cfcc0789-9f46-4ccf-874d-da969c63797a.jpg_compressed",
                        categoryId: "7992564",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sweets",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117461",
                                name: "Kaju Barfi",
                                category: "Sweets",
                                description:
                                  "Serves 1 | A delectable and mouthwatering Indian sweet that features rich cashews in every bite.",
                                imageId: "44383366e25ef8dc694e96dee45c566d",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10730135",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "1 Piece",
                                          default: 1,
                                          id: "35343807",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "250 Grams",
                                          price: 37500,
                                          id: "156605177",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 Grams",
                                          price: 70000,
                                          id: "156605178",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Kg",
                                          price: 135000,
                                          id: "35343808",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125136",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "38 ratings",
                                    ratingCountV2: "38",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "58669280",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117476",
                                name: "Moong Laddu (Per Pc)",
                                category: "Sweets",
                                description:
                                  "Delight in the aromatic and irresistible taste of this mouthwatering Indian sweet treat.",
                                imageId: "63fd252aa8f2fcb1a0224adbe0317890",
                                inStock: 1,
                                isVeg: 1,
                                price: 2400,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "50024445",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "1 Psc",
                                          default: 1,
                                          id: "156810557",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "250 G",
                                          price: 16600,
                                          id: "156810558",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 G",
                                          price: 32600,
                                          id: "156810559",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Kg",
                                          price: 65400,
                                          id: "156810560",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125184",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "59 ratings",
                                    ratingCountV2: "59",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758457",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117501",
                                name: "Rasgulla Big (Per Pc)",
                                category: "Sweets",
                                description:
                                  "Soft and spongy cottage cheese balls soaked in sweet syrup",
                                imageId: "xllkusputadem8tdhfog",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125218",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "346 ratings",
                                    ratingCountV2: "346",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758484",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117466",
                                name: "Kaju Pista Roll (Per Pc)",
                                category: "Sweets",
                                description:
                                  "A delightful blend of cashews and pistachios rolled into a mouthwatering sweet treat.",
                                imageId: "1aa75225b95832e125fb5ab3177f57de",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "50023731",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "250 G",
                                          price: 35000,
                                          default: 1,
                                          id: "156808631",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 G",
                                          price: 69000,
                                          id: "156808632",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1Kg",
                                          price: 138500,
                                          id: "156808633",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "67 ratings",
                                    ratingCountV2: "67",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49204620",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117470",
                                name: "Laddu [Per Piece]",
                                category: "Sweets",
                                description:
                                  "Melt-in-your-mouth, indulgent sweet treat filled with authentic flavors.",
                                imageId: "687e39911378da65762703dd70ea3516",
                                inStock: 1,
                                isVeg: 1,
                                price: 2000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "50024330",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "250 G",
                                          price: 15000,
                                          id: "156810226",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 G",
                                          price: 30000,
                                          id: "156810227",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Kg",
                                          price: 60000,
                                          id: "156810228",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Psc",
                                          default: 1,
                                          id: "201704444",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125155",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983665",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117509",
                                name: "Milk Cake [2 Pieces]",
                                category: "Sweets",
                                description:
                                  "A delectable and delightful sweet treat that will satisfy your cravings.",
                                imageId: "9de1e6f7683069b755f4ecfdaedaf8a3",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "30 ratings",
                                    ratingCountV2: "30",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983667",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858989",
                                name: "Kaju Barfi [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Its made with combination of roasted kaju with sugar garnish with silver",
                                imageId: "lggiyez9b4ahvqiimysz",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126149",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "50 ratings",
                                    ratingCountV2: "50",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983663",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117506",
                                name: "Kala Kand [1 Piece]",
                                category: "Sweets",
                                description:
                                  "Delight in this indulgent vegetarian sweet treat, bursting with rich flavors and creamy texture.",
                                imageId: "yeicuhfz9vt9j9lpgfak",
                                inStock: 1,
                                isVeg: 1,
                                price: 3000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "116301782",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117478",
                                name: "Gond Laddu [Per Pc]",
                                category: "Sweets",
                                description:
                                  "Delight in the indulgent sweetness of this mouthwatering, vegetarian treat.",
                                imageId: "c4352437dee23c1a449688a97e0608c6",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "50024456",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "1 psc",
                                          default: 1,
                                          id: "156810592",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "250 G",
                                          price: 20000,
                                          id: "156810593",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 G",
                                          price: 40000,
                                          id: "156810594",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Kg",
                                          price: 80000,
                                          id: "156810595",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125199",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "131 ratings",
                                    ratingCountV2: "131",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "50070140",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858991",
                                name: "Rasgulla [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Soft and spongy cottage cheese balls soaked in sweet syrup",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/ba70fcc7-d504-4f98-8936-e26f6841a121_6ac94b15-84ed-4ca3-a6ba-f6652f5abdd4.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126164",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "104 ratings",
                                    ratingCountV2: "104",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983674",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117472",
                                name: "Ghee Laddu [Per Pc]",
                                category: "Sweets",
                                description:
                                  "A delectable sweet treat made with ghee, perfect for satisfying your sweet cravings.",
                                imageId: "4b95a15f707d891f6d2e7c0b45bbcfa8",
                                inStock: 1,
                                isVeg: 1,
                                price: 2800,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "50024459",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "1 psc",
                                          default: 1,
                                          id: "156810610",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "250 G",
                                          price: 20000,
                                          id: "156810611",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "500 G",
                                          price: 40000,
                                          id: "156810612",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "1 Kg",
                                          price: 80000,
                                          id: "156810613",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272125170",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "118 ratings",
                                    ratingCountV2: "118",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49455508",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858988",
                                name: "Ghee Ladoo [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Delight your taste buds with these delectable and mouth-watering Indian sweet treats.",
                                imageId: "bsn4sahcisffv62xd3xi",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126137",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983656",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58929263",
                                name: "Hot Gulab Jamun [15 Pieces]",
                                category: "Sweets",
                                description:
                                  "Delicious and sweet, these hot gulab jamuns will satisfy your cravings for a delightful treat.",
                                imageId: "e913fbef602b86ef3ce96e8fde86d541",
                                inStock: 1,
                                isVeg: 1,
                                price: 60000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983659",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58858990",
                                name: "Hot Gulab Jamun [5 Pieces]",
                                category: "Sweets",
                                description:
                                  "Satisfy your cravings with this yummy hot gulab jamun",
                                imageId: "gilljlwffjaytb9a7y77",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983661",
                                menuFilterIds: [
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                  "toprated",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117504",
                                name: "Gopal Bhog [Per Piece]",
                                category: "Sweets",
                                description:
                                  "A delectable and indulgent vegetarian sweet treat that will surely satisfy your cravings.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/defd9ff2-8f78-42c8-82c4-36ef150e37ed_e0fc731b-0cbe-40fb-b102-351e393b985e.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983657",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72291161",
                                name: "Shahi Chamcham",
                                category: "Sweets",
                                description:
                                  "Delicate and decadent, this aromatic sweet treat is fit for royalty.",
                                inStock: 1,
                                isVeg: 1,
                                price: 4800,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "71 ratings",
                                    ratingCountV2: "71",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49335973",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "158221628",
                                name: "Besan laddu",
                                category: "Sweets",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/74922f2b-beb7-497d-9c3c-135306dbddc0_ea6bc85f-8987-4101-9ddc-188e32997e2f.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 3000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "272126193",
                                    groupName: "Savoury",
                                    choices: [
                                      {
                                        id: "144214237",
                                        name: "Papdi Chaat",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214240",
                                        name: "Paneer Bhujia",
                                        price: 27000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214243",
                                        name: "Samosa [1 Pc]",
                                        price: 2200,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214239",
                                        name: "Samosa [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214242",
                                        name: "Kachori [5 Pieces]",
                                        price: 11000,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214238",
                                        name: "Kachori Sabji [2 Pieces]",
                                        price: 4400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "144214241",
                                        name: "Dhokla [1 Pieces]",
                                        price: 2400,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "94694273",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "44383366e25ef8dc694e96dee45c566d",
                        categoryId: "7992563",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Biryani",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796997",
                                name: "Chicken Hyderabadi Biryani",
                                category: "Biryani",
                                description:
                                  "Savor the rich layers of tender chicken and fragrant basmati rice, uniquely seasoned for an unforgettable feast.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/17/f4b8cb09-a080-44a0-af22-98e63be66bee_a2a0409b-5a5c-46ed-b8ae-e19090f9bdc7.jpg",
                                inStock: 1,
                                price: 36000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522226",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101966538",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169037873",
                                name: "Chicken Biryani [Full]",
                                category: "Biryani",
                                description:
                                  "Savor the rich, aromatic layers of tender chicken and fragrant rice, perfectly cooked for a delightful experience.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/17/2707f700-9d2b-4f0e-a636-bb556b8fcdc3_9cb7fd8b-eed8-493e-ba55-bd08aee85e7a.jpg",
                                inStock: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522234",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "22650622",
                                        name: "Extra Onion",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983652",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169038044",
                                name: "Chicken Biryani [Half]",
                                category: "Biryani",
                                description:
                                  "Savory aromatic rice is layered with tender chicken, infused with rich spices for a satisfying feast.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5f48846f-993a-4c64-b29d-5dd9240ffd77_01356b3f-205f-4fe6-bd07-59be37d04dcb.jpg",
                                inStock: 1,
                                price: 20000,
                                finalPrice: 10900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522240",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "22650622",
                                        name: "Extra Onion",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "32 ratings",
                                    ratingCountV2: "32",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "5c2b7435-2f59-4238-9dde-46d0c8ae8bc7",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "101966537",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169038321",
                                name: "Egg Biryani",
                                category: "Biryani",
                                description:
                                  "Savor the rich, aromatic layers of fragrant rice and perfectly cooked eggs, delivering a comforting and indulgent experience.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/11/7e2bded5-c0dc-463b-99c3-60659326c0ab_89aef8c9-308e-4c8e-b220-b2f86acb12e7.jpg",
                                inStock: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522250",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101966539",
                                menuFilterIds: ["NONVEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "169038332",
                                name: "Veg Biryani",
                                category: "Biryani",
                                description:
                                  "Fragrant rice intertwined with vibrant vegetables, offering a delightful blend of aromas and flavors.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/0fff6674-06bf-40d9-93de-a82bcfcc2559_bb17fc75-36ab-4c53-9146-c5166f3080ee.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522252",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "23 ratings",
                                    ratingCountV2: "23",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101966540",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796994",
                                name: "Veg Hyderabadi Biryani",
                                category: "Biryani",
                                description:
                                  "A fragrant medley of basmati rice and aromatic vegetables, infused with rich spices for a delightful experience.",
                                inStock: 1,
                                isVeg: 1,
                                price: 32000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269522278",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "112714336",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "193450185",
                                name: "Ghee Rice",
                                category: "Biryani",
                                inStock: 1,
                                isVeg: 1,
                                price: 26900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "117980851",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/17/f4b8cb09-a080-44a0-af22-98e63be66bee_a2a0409b-5a5c-46ed-b8ae-e19090f9bdc7.jpg",
                        categoryId: "60910096",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Uttapam",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520439",
                                name: "Paneer Uttapam",
                                category: "Uttapam",
                                description:
                                  "Serves 1 | A thick pancake made from rice flour to which onions, paneer , tomatoes, chilli peppers, and other vegetables are added during cooking.",
                                imageId: "204e2921490d5350cafda725217ef8b5",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                finalPrice: 7900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269501092",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839235",
                                        name: "Extra Sambar",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269501093",
                                    groupName: "Butter/ Ghee",
                                    choices: [
                                      {
                                        id: "64267856",
                                        name: "Extra Butter",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269501094",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "20 ratings",
                                    ratingCountV2: "20",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "2b628827-e35b-4c69-940a-6a807be4aba7",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "49071487",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520440",
                                name: "Coconut Uttapam",
                                category: "Uttapam",
                                description:
                                  "A South Indian delicacy, try out this yummy rice flour with urad dal",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5c055c2a-0377-41ca-a35a-93ccbd97b890_66cc2e10-d5c8-424e-a001-3735c742d27d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                finalPrice: 7900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "2b628827-e35b-4c69-940a-6a807be4aba7",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "50070138",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520441",
                                name: "Mix Uttapam",
                                category: "Uttapam",
                                description:
                                  "An irresistible combo of melt-in-the-mouth mix veg uttapam; paired with chutney and sambhar.",
                                imageId: "093516d8842e9790c890c408feae1216",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                finalPrice: 12500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "37 ratings",
                                    ratingCountV2: "37",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "b967860c-0060-4d2f-81e7-9fd2e1e887bf",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "49985786",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520442",
                                name: "Tomato Uttapam",
                                category: "Uttapam",
                                description:
                                  "Tomato uttapam is extension to regular uttapam topped with tomato and indian masala.",
                                imageId: "ed293e6f1d8bf16fbae6e407e7667118",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "50070148",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520443",
                                name: "Onion Uttapam",
                                category: "Uttapam",
                                description:
                                  "Thick savoury pancake made with dosa batter, topped with onion and served with chutney and sambhar, a must try!",
                                imageId: "316161d531c9f7c1786173861dbb480b",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                finalPrice: 8900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "20 ratings",
                                    ratingCountV2: "20",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "17f3b323-128e-49f9-b794-25159efffce3",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "49985787",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58520444",
                                name: "Plain Uttapam",
                                category: "Uttapam",
                                description:
                                  "Butter coconut uttapam is a thick pancake made with fermented lentil rice batter. topped with sliced coconut & butter. it's a delightful breakfast which is loved by people of all age groups.",
                                imageId: "10efec31211d9863e6da4805267755d2",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "50070145",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "204e2921490d5350cafda725217ef8b5",
                        categoryId: "11326571",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Paneer main course",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796877",
                                name: "Paneer Butter Masala",
                                category: "Paneer main course",
                                description:
                                  "Chunks of cottage cheese cooked in dense butter rich gravy if onion, tomatoes and spices.",
                                imageId: "tqggkffnnengfudnjapb",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520677",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520676",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "634 ratings",
                                    ratingCountV2: "634",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758472",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71864199",
                                name: "Matar Paneer",
                                category: "Paneer main course",
                                description:
                                  "A tasty and delectable dish made by cooking paneer cubes in a flavourful gravy made of onion and tomatoes along with peas.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/4370658a-74b5-4692-be88-dc25174f649b_73a9b4fc-6424-47e2-9629-2b657dedef30.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520693",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520692",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758451",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796925",
                                name: "Paneer Chatpata",
                                category: "Paneer main course",
                                description:
                                  "A perfectly seasoned dish with paneer cooked with onions, tomatoes, green chillies and other veggies.",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452385",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796931",
                                name: "Paneer Tikka Butter Masala",
                                category: "Paneer main course",
                                description:
                                  "Luscious combination of paneer and exotic gravy made from tomato puree, chopped onions and spices",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/88d8e68c-4f42-4338-90f1-620089df6843_390abd8d-2a06-4e11-9c48-88690f14e227.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 36000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520697",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520699",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452391",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117446",
                                name: "Paneer Jharkhandi",
                                category: "Paneer main course",
                                description:
                                  "A delectable and flavourful vegetarian delight showcasing tender paneer cooked in an authentic jharkhandi style.",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452388",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117550",
                                name: "Paneer Do Pyaza",
                                category: "Paneer main course",
                                description:
                                  "Serves 1 | Dices of paneer and onion tossed in aromatic Kadhai gravy made of onion and robust spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/ff259a77-2638-4d6c-bd35-5d7035959988_8e08ba32-0e35-434d-a25e-50f159cea5dc.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520703",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520702",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "46 ratings",
                                    ratingCountV2: "46",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452386",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796992",
                                name: "Paneer Tikka Lababdar",
                                category: "Paneer main course",
                                description:
                                  "Serves 1 | A white and red gravy mixed with paneer in a medium spicy gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/09134ef9-4a89-490f-a77b-25924c6438ba_a9269185-8e0a-40e2-9830-c0e1fb7c5dce.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520707",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520708",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452392",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150777516",
                                name: "Kadhai Paneer",
                                category: "Paneer main course",
                                description:
                                  "400ml | A delicious Kadhai paneer mix with veggies and spices, medium spicy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/bc5ba346-0902-46e5-b9d2-286d5492b1b9_b21bdb0a-ea06-4e40-a79e-b27bfb740dfc.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520716",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520717",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452380",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150778228",
                                name: "Shahi Paneer [Sweet white gravy]",
                                category: "Paneer main course",
                                description:
                                  "Delight in this delectable vegetarian dish featuring succulent paneer in a luscious, sweet white gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/49265acb-715a-468d-b81d-ee179dae262c_739635f2-aa9b-45e7-9b7b-180b8192dbad.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520721",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520722",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452393",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150778329",
                                name: "Malai Kofta [Sweet White Gravy]",
                                category: "Paneer main course",
                                description:
                                  "Serves 1 | Has a sweet white gravy, prepared without onion and garlic.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5897012a-9632-485c-974b-b88c1cfa8117_fa7e5dac-92aa-40e9-a851-d755dad628a8.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "269520727",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839850",
                                        name: "Green Salad",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "269520726",
                                    groupName: "Choice of breads",
                                    choices: [
                                      {
                                        id: "143892929",
                                        name: "Tandoori Butter Roti",
                                        price: 3400,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892922",
                                        name: "Tandoori Roti",
                                        price: 2900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143892923",
                                        name: "Butter Naan",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 3,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452381",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150778766",
                                name: "Paneer Korma [Sweet White Gravy]",
                                category: "Paneer main course",
                                description:
                                  "A delectable vegetarian delight with succulent paneer in a luscious, creamy and mildly sweet white gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/35d8566e-4698-45e7-8861-583d23a17a2c_8131f5d1-159c-42c1-a29c-000751c4d6d2.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452389",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150778806",
                                name: "Paneer Jhalfrezi",
                                category: "Paneer main course",
                                description:
                                  "Try the spiciest paneer prepared with whole red chillies and desi spices to give a Spicy Taste Bomb.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/0bd9f8dc-6f12-491f-be23-e04b5205f95d_0f046488-66d3-4bf2-b946-33ceb0430160.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 34000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452387",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "150778825",
                                name: "Paneer Bhujia",
                                category: "Paneer main course",
                                description:
                                  "Stir fried Indian cottage cheese along with onions, tomatoes, ginger and garlic. Its a simple dish to be served at any time of the day.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/1f005844-bef9-43c0-be38-59bb4f5e2f03_ff7a05a9-a1f2-4c3d-9a91-4cc095190f41.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "89452384",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "tqggkffnnengfudnjapb",
                        categoryId: "53003297",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Combos",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "56108800",
                                name: "Veg Chowmein (1/2) + Veg Manchurian (1/2)",
                                category: "Combos",
                                description: "Prepared without onion & garlic.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/5/30/77736e30-50c4-404d-bcfa-501016c629c5_d8032eb1-a4ff-4610-92d5-4732fdfaecf8.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "31 ratings",
                                    ratingCountV2: "31",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "61679861",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "56108858",
                                name: "Veg Fried Rice (1/2) + Paneer Chilli (1/2)",
                                category: "Combos",
                                description:
                                  "A delectable combination of flavorful veg fried rice paired with succulent paneer, creating a delightful combo that will tantalize your taste buds.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/26/6531a560-e0ec-4b25-a60e-e364c6718c26_ff9bb6c1-a749-42d3-8385-bdc627506054.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "31 ratings",
                                    ratingCountV2: "31",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983682",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "107620157",
                                name: "Veg Chowmein (1/2) + Paneer Chilli (1/2)",
                                category: "Combos",
                                description:
                                  "A delightful combination of flavorful vegetable chowmein and succulent paneer stir-fried in a tantalizing sauce.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/23/7635f18e-ead1-4fc0-8550-714207dd9347_31ce1720-4876-43ce-8ef7-a85cfef923f9.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "19 ratings",
                                    ratingCountV2: "19",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "61937380",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168399777",
                                name: "Veg Chowmein (1/2) + Chicken Chilli (1/2)",
                                category: "Combos",
                                description:
                                  "A tantalizing combination of savory vegetables and tender chicken, perfect for those craving a flavorful fusion of flavors.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/30/d537748d-203d-42c7-b77e-e4b53d85a06a_a338cff8-f893-4ee3-9f04-63be0f221923.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983680",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168400093",
                                name: "Veg Freid Rice (1/2) + Chicken Chilly (1/2)",
                                category: "Combos",
                                description:
                                  "Savor the perfect combo of flavorful Veg Fried Rice and tender Chicken - a delicious treat for your taste buds!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/751b50d3-5731-4393-b93b-7f54cd5a6856_6a08c5a4-cbb3-4388-9ef1-18936d19deb4.jpg",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101614344",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174475343",
                                name: "Chicken Curry + Tandoori Roti (2 Pieces)",
                                category: "Combos",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/5/17/b8c56634-6c39-448b-95dd-e9fa09626043_64794057-e7e0-4caf-a0cd-b53ffa5d18ec.jpg_compressed",
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983653",
                                menuFilterIds: ["NONVEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/5/30/77736e30-50c4-404d-bcfa-501016c629c5_d8032eb1-a4ff-4610-92d5-4732fdfaecf8.jpg_compressed",
                        categoryId: "30288583",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                        title: "Main Course",
                        categories: [
                          {
                            title: "Rice & Pulao",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28796899",
                                    name: "Plain Rice",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/f58fc44e-aca7-43b5-b239-82c5ee67136a_34c13560-1b29-465f-aa67-f9b9dc756a20.jpg_compressed",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 20000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.4",
                                        ratingCount: "49 ratings",
                                        ratingCountV2: "49",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538799",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28796903",
                                    name: "Jeera Rice",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/3eec32c0-27b7-4421-9360-9c08bef3cccd_4b632ef3-a268-493d-a30b-61b09a48cea3.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 22000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.3",
                                        ratingCount: "35 ratings",
                                        ratingCountV2: "35",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538792",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "45117505",
                                    name: "Kashmiri Pulao",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/a2d1e266-e542-49aa-9519-f53f001427cc_9d90432a-3fe0-4210-bf78-b1a2d8d4b047.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538793",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28796916",
                                    name: "Paneer Pulao",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5d345736-3d80-4380-a800-b3023a439a93_bc340d0a-0da8-4c6c-86ad-77f6e668c73e.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 25000,
                                    finalPrice: 13900,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    offerTags: [
                                      {
                                        matchText: "SILD",
                                      },
                                    ],
                                    itemBadge: {},
                                    badgesV2: {},
                                    itemNudgeType: "FinalPrice",
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "3.9",
                                        ratingCount: "18 ratings",
                                        ratingCountV2: "18",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#D9EFEC", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_medium",
                                        ratingTextColor: "rating_medium",
                                        ratingCountTextColor: "rating_medium",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    cartContext: "quick_prep",
                                    offerIds: [
                                      "627d71b0-daea-4b1d-add0-1531c46a5771",
                                    ],
                                    isNinetyninestoreItem: true,
                                    parentId: "101538798",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168307692",
                                    name: "Veg Pulao",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/3adae820-ff87-4c60-b782-ca25c80ec1c0_acd4350e-ed56-4688-81ab-fb4c60a35b4d.jpg_compressed",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 24000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "107983683",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "60453073",
                          },
                          {
                            title: "Dal",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55987042",
                                    name: "Dal Butter Fry",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 18000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.9",
                                        ratingCount: "4 ratings",
                                        ratingCountV2: "4",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101583417",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55987052",
                                    name: "Dal Tadka [Yellow]",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/12/6bc6e034-1249-4634-97e5-ad7c1ead67d6_fe4215d0-5ff8-424a-9e47-d0138a2456fe.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 22000,
                                    finalPrice: 10500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    offerTags: [
                                      {
                                        matchText: "SILD",
                                      },
                                    ],
                                    itemBadge: {},
                                    badgesV2: {},
                                    itemNudgeType: "FinalPrice",
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.7",
                                        ratingCount: "10 ratings",
                                        ratingCountV2: "10",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    offerIds: [
                                      "5b8204ef-459b-4d3a-93e8-0cef6ab93cc7",
                                    ],
                                    parentId: "101583421",
                                    offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                    offerHeader: "Only till",
                                    offerSubHeader: "2:00 PM",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55987077",
                                    name: "Dal Makhani",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/12/4543d34b-9444-435c-81a9-0091744626e2_eec547a4-bccd-465b-96f1-1f53c87421c8.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 24000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.3",
                                        ratingCount: "7 ratings",
                                        ratingCountV2: "7",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101583418",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "63791213",
                                    name: "Dal Tadka [Black]",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/14/0b997090-2fce-4863-82b5-229b68acc291_2ae0be7d-6788-447f-9e57-0d35a57943de.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 23000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101583420",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168336125",
                                    name: "Dal Mughlai",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 20500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101583419",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168336148",
                                    name: "Plain Dal",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 19000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101583446",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "60524586",
                          },
                          {
                            title: "Vegetables main course",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28797054",
                                    name: "Veg Kofta",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/14/7d36f13a-fedd-4fc5-b428-4095e371b06e_ae4c6f24-bd80-4013-a1b8-8ce0f8e19b96.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 28000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.9",
                                        ratingCount: "9 ratings",
                                        ratingCountV2: "9",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "48758498",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55917326",
                                    name: "Chana Masala",
                                    category: "Main Course",
                                    imageId: "azbfyr0r15p9jlgcfuys",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 20000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522458",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522459",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.7",
                                        ratingCount: "29 ratings",
                                        ratingCountV2: "29",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "48758433",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28797047",
                                    name: "Aloo Jeera",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/449951da-8fd3-4df5-bd57-26c8e3eac61a_ae988680-af7d-48f8-bce8-5f1d2ea67601.jpg_compressed",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 25000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "5.0",
                                        ratingCount: "5 ratings",
                                        ratingCountV2: "5",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "48758430",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982764",
                                    name: "Matar Mushroom",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 25000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.5",
                                        ratingCount: "13 ratings",
                                        ratingCountV2: "13",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538795",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "28797049",
                                    name: "Aloo Dum",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/24/c461eeac-d86a-4150-a063-28e4258cba8e_44750766-37e9-409f-9558-94986c6e74c8.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 20000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "2.0",
                                        ratingCount: "11 ratings",
                                        ratingCountV2: "11",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#FFF0CD", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_low",
                                        ratingTextColor: "rating_low",
                                        ratingCountTextColor: "rating_low",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "48758429",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982765",
                                    name: "Mushroom Masala",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522452",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522451",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522453",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.6",
                                        ratingCount: "21 ratings",
                                        ratingCountV2: "21",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538796",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982766",
                                    name: "Mansarovar Spl Veg",
                                    category: "Main Course",
                                    description:
                                      "Savor a delightful medley of fresh vegetables, perfectly cooked to create a harmonious and tasty main course.",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522500",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522499",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522501",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.6",
                                        ratingCount: "9 ratings",
                                        ratingCountV2: "9",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538794",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "71864400",
                                    name: "Mix Veg",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/7/11/b9afe175-dffa-41c9-93e6-c8daf29b8e2d_47fb9b14-1fc0-4ab2-93e5-ba9f35a5aab7.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522445",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522444",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522446",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.4",
                                        ratingCount: "14 ratings",
                                        ratingCountV2: "14",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "48758455",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982767",
                                    name: "Navratan Korma",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "3.9",
                                        ratingCount: "9 ratings",
                                        ratingCountV2: "9",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#D9EFEC", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_medium",
                                        ratingTextColor: "rating_medium",
                                        ratingCountTextColor: "rating_medium",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538797",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982768",
                                    name: "Veg Do Pyaza",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 25000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522496",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522495",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.6",
                                        ratingCount: "7 ratings",
                                        ratingCountV2: "7",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538802",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55982770",
                                    name: "Baby Corn Masala",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 24000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.6",
                                        ratingCount: "6 ratings",
                                        ratingCountV2: "6",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538791",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "55921313",
                                    name: "Aloo Matar",
                                    category: "Main Course",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/2/e3b9b260-223a-4620-b033-40bb4ac4ac37_3227934c-dea6-482d-a0cf-677fdd83dc7c.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 20000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522504",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522506",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522505",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538790",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168311183",
                                    name: "Veg Kadhai",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269522508",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522511",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269522509",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538803",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168311200",
                                    name: "Veg Chatpata",
                                    category: "Main Course",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538801",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "60524515",
                          },
                          {
                            title: "Thali",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "168308298",
                                    name: "Veg Thali",
                                    category: "Main Course",
                                    description:
                                      "veg and paneer rice roti dal sweet pickal",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/8/26/ddaca097-6eb1-4286-935e-5ab5db9b907e_feb9c0e6-1732-48e7-868c-c4f8c4f14d36.jpg_compressed",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 30000,
                                    variants: {},
                                    variantsV2: {},
                                    addons: [
                                      {
                                        groupId: "269979580",
                                        groupName: "Accompaniments",
                                        choices: [
                                          {
                                            id: "143839125",
                                            name: "Veg Raita ",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143839850",
                                            name: "Green Salad",
                                            price: 9900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269979582",
                                        groupName: "Choice of breads",
                                        choices: [
                                          {
                                            id: "143892929",
                                            name: "Tandoori Butter Roti",
                                            price: 3400,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892922",
                                            name: "Tandoori Roti",
                                            price: 2900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143892923",
                                            name: "Butter Naan",
                                            price: 6900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 3,
                                        maxFreeAddons: -1,
                                      },
                                      {
                                        groupId: "269979583",
                                        groupName: "Choice of rice",
                                        choices: [
                                          {
                                            id: "143893040",
                                            name: "Jeera Rice",
                                            price: 19900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            id: "143893032",
                                            name: "Plain Rice",
                                            price: 17900,
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                        maxAddons: 2,
                                        maxFreeAddons: -1,
                                      },
                                    ],
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "4.4",
                                        ratingCount: "16 ratings",
                                        ratingCountV2: "16",
                                      },
                                      ratingsPresentationConfig: {
                                        bgGradient: {
                                          colours: ["#C8F9E5", "#00FFFFFF"],
                                          gradientDirection:
                                            "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                        },
                                        ratingIconColor: "rating_very_good",
                                        ratingTextColor: "rating_very_good",
                                        ratingCountTextColor:
                                          "rating_very_good",
                                        ratingFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                        ratingCountFontName:
                                          "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      },
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "101538804",
                                    menuFilterIds: ["VEG", "offer", "toprated"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "60452607",
                          },
                        ],
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/8/2/f58fc44e-aca7-43b5-b239-82c5ee67136a_34c13560-1b29-465f-aa67-f9b9dc756a20.jpg_compressed",
                        categoryId: "60451498",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Indian Breads",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796909",
                                name: "Tandoori Roti",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/17/34b257bb-5aa5-4412-b200-e85a125bbe1c_e8e920bf-3842-4a86-937e-2f5a984f9703.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 3000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758490",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796927",
                                name: "Butter Naan",
                                category: "Indian Breads",
                                imageId: "kiiynxb81xtquvndcdkd",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "348 ratings",
                                    ratingCountV2: "348",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758432",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796972",
                                name: "Paneer Kulcha",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/8c81ea6a-6d02-4727-aee9-6e311541a163_6092aa8e-b4f4-4d06-a772-91db13edcc8e.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583442",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58796741",
                                name: "Masala Kulcha",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/17/2cf8d846-1e92-4be1-ba6a-6d3516c35d41_93dde442-654c-4835-ac3d-37dedac027cf.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "108 ratings",
                                    ratingCountV2: "108",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758450",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58796742",
                                name: "Plain Kulcha",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/20/c4c247d3-bf55-462e-a239-0ddd90f715de_59283770-0089-4415-bf1d-44ad3255904c.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 4500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758481",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "74005952",
                                name: "Tandoori Butter Roti",
                                category: "Indian Breads",
                                imageId: "cbj9wlh5kxth8rzcs7ag",
                                inStock: 1,
                                isVeg: 1,
                                price: 3500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758489",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796932",
                                name: "Ginger Naan",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/33d0578f-f182-438d-b314-af4844e8e45b_baa2ebb8-3fc3-4f45-9792-c6f687c632fb.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583431",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "58796740",
                                name: "Garlic Naan",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/20/da032798-180a-4cdb-a488-c13316454118_43251d04-2cfa-43e7-893c-c884c82a0d26.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583430",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796957",
                                name: "Aloo Paratha",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/85812508-a220-4364-89c5-120fe540b5ac_187f1d2f-f933-4c82-9107-8321711ea7bf.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                finalPrice: 4500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "12d84f86-5b65-42de-8993-11eaecaa1302",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "101583403",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168355021",
                                name: "Lachha Paratha",
                                category: "Indian Breads",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/20/81904c8b-0063-40a8-8d0e-c4c0fb19a7a9_cdf08628-403e-4010-bd67-2a7ec6f307f2.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583432",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/17/34b257bb-5aa5-4412-b200-e85a125bbe1c_e8e920bf-3842-4a86-937e-2f5a984f9703.jpg_compressed",
                        categoryId: "60525214",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chaats",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71879167",
                                name: "Papdi Chaat",
                                category: "Chaats",
                                imageId: "bd791983ee227a6dca85d0d501ebef27",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107983671",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71879172",
                                name: "Paneer Samosa Chat",
                                category: "Chaats",
                                imageId: "222d8f0ecde5f6039d1a8c91545e070a",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "252656445",
                                    groupName: "Chutney",
                                    choices: [
                                      {
                                        id: "61980321",
                                        name: "Extra Chutney",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "13 ratings",
                                    ratingCountV2: "13",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758478",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71879173",
                                name: "Mix Chaat",
                                category: "Chaats",
                                imageId: "1dd98935430faf8963af1359fe63b9e3",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "88471443",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71879181",
                                name: "Dahi Vada",
                                category: "Chaats",
                                description:
                                  "A delightfully tasty dish prepared with a delectable vada layered with generous amount of curds, garnished with masalas and chutneys (2pc).",
                                imageId: "d6b7d6fab1676da05b28c4ca113807e9",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.6",
                                    ratingCount: "41 ratings",
                                    ratingCountV2: "41",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758437",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "140625297",
                                name: "Samosa Chaat",
                                category: "Chaats",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/15/0ce3d8a1-d086-4e55-be9f-8cad67f9d3a6_86f5dc3b-79f6-4911-a46a-924a8bb6d02a.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "36 ratings",
                                    ratingCountV2: "36",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "88471446",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "140625301",
                                name: "Kachori Chaat",
                                category: "Chaats",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/15/398e6b47-efb2-4fea-bd37-d4b6d2f25328_17e4e4cc-a119-4dd7-8fe4-9945f186e3a3.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "88471441",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "140625311",
                                name: "Vegetable Chop Chaat",
                                category: "Chaats",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/15/082f0610-d548-44b7-b0dc-769bb1fbffb9_6f9d82ab-f88b-43e6-b4c8-fadee3a8718b.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 4900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "3acc4314-2ec4-4358-919a-26f3ca3c5052",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "107983681",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "71879183",
                                name: "Dahi Papdi",
                                category: "Chaats",
                                description:
                                  "Serves 1 | A delightful indian snack consisting of crisp papdis topped with creamy yogurt.",
                                imageId: "9b5fc67ce51c1f898501ea0866788438",
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                nextAvailableAtMessage:
                                  "Next available at 8:30 am, tomorrow",
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48758436",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "140625334",
                                name: "Tikki Chaat",
                                category: "Chaats",
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                nextAvailableAtMessage:
                                  "Next available at 8:30 am, tomorrow",
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "88471447",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "151645470",
                                name: "Pav Bhaji [2 Pav]",
                                category: "Chaats",
                                isVeg: 1,
                                price: 10000,
                                variants: {},
                                variantsV2: {},
                                nextAvailableAtMessage:
                                  "Next available at 8:30 am, tomorrow",
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983672",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "bd791983ee227a6dca85d0d501ebef27",
                        categoryId: "15220715",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chinese",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "52359228",
                                name: "Paneer Manchurian",
                                category: "Chinese",
                                description:
                                  "Serves 1 | An indo-chinese dish of veg fried balls and paneer cooked with soya sauce, chilli sauce and vegetables.",
                                imageId: "qlzn7ao80i4r8w3sjzov",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211938",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899698",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899699",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.4",
                                    ratingCount: "226 ratings",
                                    ratingCountV2: "226",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49335972",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059571",
                                name: "Chilli Paneer",
                                category: "Chinese",
                                description:
                                  "Paneer cubes marinated in soy sauce, chilli sauce and pepper, deep fried until crisp and cooked in soy sauce, green chilli, tomato puree, onion and bell peppers",
                                imageId: "lpqylbpznebyfsqtuz3n",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633809",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046503",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 7500,
                                          id: "35046504",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "11211923",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899664",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899665",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "220828419",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "64267858",
                                        name: "Onion salad",
                                        price: 7900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.1",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983654",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "55853203",
                                name: "Mushroom Chilli",
                                category: "Chinese",
                                description:
                                  "Delectable mushrooms cooked in a spicy and tasty chilli sauce - perfect dish to satisfy your cravings.",
                                imageId: "007539d5f2d65ef44103e4d9c000557c",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211961",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899753",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899754",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983668",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059572",
                                name: "Veg Chilli",
                                category: "Chinese",
                                description:
                                  "A delectable Chinese delight bursting with flavors and goodness.",
                                imageId: "cc854e2fde3a918777aaf871c18f24b3",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211962",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899755",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899756",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983679",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059569",
                                name: "Hakka Chowmein Gravy",
                                category: "Chinese",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "50162000",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117467",
                                name: "Veg Mix Chowmein",
                                category: "Chinese",
                                description:
                                  "Pasta made with flour and stir fried with vegetables, cottage cheese, baby corn, mushroom and cashew nuts.",
                                imageId: "d91b66105a2181d67bd2367ad2faa5c3",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                finalPrice: 13500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633807",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046499",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 7000,
                                          id: "35046500",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "268925168",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839253",
                                        name: "Veg Manchurian [Half]",
                                        price: 22900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.6",
                                    ratingCount: "44 ratings",
                                    ratingCountV2: "44",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "b7081c15-9e87-4b51-9b90-1a5ba1269976",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "48828770",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117464",
                                name: "Mushroom Chowmein",
                                category: "Chinese",
                                description:
                                  "A flavor-packed dish with noodles, assorted veggies and mushroom tossed in a soy, celery, chilli and vinegar based sauce.",
                                imageId: "5dd85365e0709b29de7b2c39608803b1",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633806",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046497",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Fuill",
                                          price: 9000,
                                          id: "35046498",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "48828767",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117462",
                                name: "Paneer Chowmein",
                                category: "Chinese",
                                description:
                                  "A tasty dish with noodles and assorted veggies and paneer tossed in a soy, chilli and vinegar based sauce served with tomato and chili sauce.(serve1)",
                                imageId: "obvqsr5oxxa2mmy3bz6g",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633805",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046495",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 9000,
                                          id: "35046496",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "79 ratings",
                                    ratingCountV2: "79",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49577353",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797072",
                                name: "Veg Schezwan Chowmein",
                                category: "Chinese",
                                description:
                                  "The spicy schezwan sauce and hakka noodles is made with soy sauce along with veggies.",
                                imageId: "0d0bc1d3e304c75986cadce0aa05ad51",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983684",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117459",
                                name: "Veg Chowmein",
                                category: "Chinese",
                                description:
                                  "A delicious dish prepared from scrumptious noodles and stir-fried vegetables.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/31/b02ff551-aff0-4228-b01e-b0421dc46daa_5a76d61c-7a3b-4fbf-af70-7fd18c4295a0.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                finalPrice: 10900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "10633792",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046458",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 7000,
                                          id: "35046459",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "268925102",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "143839125",
                                        name: "Veg Raita ",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "143839253",
                                        name: "Veg Manchurian [Half]",
                                        price: 22900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 2,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "203 ratings",
                                    ratingCountV2: "203",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                offerIds: [
                                  "8cc3814d-1835-42c1-bace-39ce5dd32b61",
                                ],
                                parentId: "49071490",
                                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                offerHeader: "Only till",
                                offerSubHeader: "2:00 PM",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059451",
                                name: "Mansarovar Special Chowmein",
                                category: "Chinese",
                                description:
                                  "Indulge in the tantalizing flavors of our Chinese-inspired creation, boasting an unrivaled combination of delectable vegetables and savory goodness.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/0e8456fc-1805-43a1-bc9e-03280fdc6abd_055e8f95-9891-4a60-9129-a8dee27edbab.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "220828423",
                                    groupName: "Add-ons",
                                    choices: [
                                      {
                                        id: "22654583",
                                        name: "Extra Mushroom",
                                        price: 2000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "220828424",
                                    groupName: "Sauce",
                                    choices: [
                                      {
                                        id: "61980322",
                                        name: "Tamato Sauce",
                                        price: 1000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "49807143",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059570",
                                name: "Babycorn Chilli",
                                category: "Chinese",
                                description:
                                  "Spice up your taste buds with our babycorn chilli. crispy and flavorful, it's the perfect snack for a delightful kick",
                                imageId: "3039b4a96c460c7983e5acfd78f96630",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211963",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899757",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899758",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983650",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "55853426",
                                name: "Veg Manchurian",
                                category: "Chinese",
                                description:
                                  "Vegetables dipped in a seasoned batter, deep fried and tossed in a deliciously spicy manchurian sauce",
                                imageId: "ce95e0b4bc8cb3b8dcd42763c8c6706e",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                finalPrice: 14900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "11211960",
                                      name: "Preparation type",
                                      variations: [
                                        {
                                          name: "Dry",
                                          default: 1,
                                          id: "36899751",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Gravy",
                                          price: 1000,
                                          id: "36899752",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                    {
                                      groupId: "10633812",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "35046511",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 6000,
                                          id: "35046512",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "116 ratings",
                                    ratingCountV2: "116",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "924a784e-3b6a-4920-9e8a-5e3e9b24671c",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "50162002",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "72059573",
                                name: "Soya Chilli",
                                category: "Chinese",
                                description:
                                  "A flavorful Chinese dish bursting with delectable plant-based ingredients.",
                                imageId: "98ce2ffaa6a6e29f152b03ddba2dad86",
                                inStock: 1,
                                isVeg: 1,
                                price: 17000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983678",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "qlzn7ao80i4r8w3sjzov",
                        categoryId: "15287184",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Pizza",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "103266277",
                                name: "Mix Veg Pizza [7 Inch]",
                                category: "Pizza",
                                description:
                                  "Serves 1 | Savor a burst of flavors with our 7-inch mixed veg pizza, loaded with a colorful medley of fresh vegetables",
                                imageId: "f6d337805e28cfeb81239a7c4b16a499",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                finalPrice: 13900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "21439472",
                                      name: "Size",
                                      variations: [
                                        {
                                          name: "Regular",
                                          default: 1,
                                          id: "70476941",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Family",
                                          price: 15000,
                                          id: "70476942",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "155642177",
                                    groupName: "Pizza",
                                    choices: [
                                      {
                                        id: "61980323",
                                        name: "Veg Toppings",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "23 ratings",
                                    ratingCountV2: "23",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "627d71b0-daea-4b1d-add0-1531c46a5771",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "71027261",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "103266943",
                                name: "Paneer Chilli Pizza [7inch]",
                                category: "Pizza",
                                description:
                                  "Serves 1 | Indulge in a savory 7-inch pizza loaded with creamy paneer and flavorsome toppings.",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "21439618",
                                      name: "Size",
                                      variations: [
                                        {
                                          name: "Regular",
                                          default: 1,
                                          id: "70477334",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Family",
                                          price: 15000,
                                          id: "70477335",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "155642178",
                                    groupName: "Pizza",
                                    choices: [
                                      {
                                        id: "61980323",
                                        name: "Veg Toppings",
                                        price: 3000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "28 ratings",
                                    ratingCountV2: "28",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "107983670",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "133358143",
                                name: "Paneer Tikka Pizza [Regular]",
                                category: "Pizza",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/26/d921a92b-6bd9-4b39-887c-8720f2991a8c_8b08aa3e-3a39-4fa8-8481-fb7a71aba388.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.5",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "109556986",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "f6d337805e28cfeb81239a7c4b16a499",
                        categoryId: "28171908",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Veg Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28797010",
                                name: "Paneer Chilli",
                                category: "Veg Starters",
                                imageId: "sueegvw61m6ddpn6bu4l",
                                inStock: 1,
                                isVeg: 1,
                                price: 29000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.5",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583441",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "55917878",
                                name: "French Fry",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583429",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168355066",
                                name: "Corn Salt Pepper Dry",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583415",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168355101",
                                name: "Mushroom Chilli Dry",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583434",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168355772",
                                name: "Crispy Chilli Baby Corn",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 30000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583416",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168380675",
                                name: "Paneer 65",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101614341",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "193449343",
                                name: "paneer crispey",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "117980852",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "193449352",
                                name: "Chana Chilli",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 18900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "117980849",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "193449569",
                                name: "American Corn Chilli",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "117980848",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "193449726",
                                name: "Chinese Bhel",
                                category: "Veg Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "117980850",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "sueegvw61m6ddpn6bu4l",
                        categoryId: "60525861",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Pakoda",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168337827",
                                name: "Egg Pakoda",
                                category: "Pakoda",
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "EGG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583425",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168337828",
                                name: "Chicken Pakoda Boneless",
                                category: "Pakoda",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/48881a3e-a7b5-4a85-bb0e-fbb7cda9b13c_230330b8-3c20-498a-a03c-1fe5cfca8246.jpg_compressed",
                                inStock: 1,
                                price: 30000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583409",
                                menuFilterIds: ["NONVEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168337858",
                                name: "Veg Pakoda",
                                category: "Pakoda",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/5771adc0-976c-4586-8aca-7c05237cc179_ef0fe8c0-0c5e-4813-b835-4d7b3929f07a.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101583448",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "168337915",
                                name: "Paneer Pakoda",
                                category: "Pakoda",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/2/1bc06fd0-822a-42c5-b8a5-09dc962adb9d_320ab90a-5abd-4c2f-be77-644d2ed823ea.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                finalPrice: 13900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "627d71b0-daea-4b1d-add0-1531c46a5771",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "101583444",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "186563466",
                                name: "Egg Chilli 8 Ice",
                                category: "Pakoda",
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "EGG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "113445153",
                                menuFilterIds: ["NONVEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/8/2/48881a3e-a7b5-4a85-bb0e-fbb7cda9b13c_230330b8-3c20-498a-a03c-1fe5cfca8246.jpg_compressed",
                        categoryId: "60524450",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chinese Veg",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "45117471",
                                name: "Veg American Chopsuey",
                                category: "Chinese Veg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101614342",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "31056941",
                                name: "Veg Hakka Noodles Gravy",
                                category: "Chinese Veg",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#C8F9E5", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_very_good",
                                    ratingTextColor: "rating_very_good",
                                    ratingCountTextColor: "rating_very_good",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                parentId: "101614345",
                                menuFilterIds: ["VEG", "offer", "toprated"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        categoryId: "60525898",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Burger",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "28796974",
                                name: "Veg Burger + Chips",
                                category: "Burger",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/6/6/c4b374cb-a855-47f8-81a7-480649ced873_3a7b7f6d-33e7-4a29-83da-20ceaeddef2e.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                finalPrice: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.4",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "bca8b11b-b30d-4018-93c8-064d42b7fcb0",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "104736171",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/6/6/c4b374cb-a855-47f8-81a7-480649ced873_3a7b7f6d-33e7-4a29-83da-20ceaeddef2e.jpeg",
                        categoryId: "62906703",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        type: "FSSAI",
                        imageId: "fssai_final_edss9i",
                        text: ["License No. 11121017000008"],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        name: "Mansarovar Sweets",
                        area: "City Centre",
                        completeAddress:
                          "Plot No.GD 4/5, City Center, Sector 4, Bokaro Steel City, Jharkhand 827004",
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
    tid: "2fd3a554-72b7-4522-8546-2e9679f80df1",
    sid: "pj1ae440-173d-4e20-9484-40ef07b03605",
    deviceId: "0909e5a9-ce05-d30b-6633-164b3c3aa539",
    csrfToken: "42DSaFvAa5Tx-OTQ6kRTT9jyR8dWCrJZkVYPrkc0",
  },
];
