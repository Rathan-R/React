import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
        />{" "}
        <h2>Palatepilot</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { dataSet } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    dataSet?.info;
  const { deliveryTime } = dataSet?.info?.sla;

  return (
    <div className="res-cards">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <span className="rating">
        <div> {avgRating} </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

const dataList = [
  {
    info: {
      id: "76622",
      name: "Geetha Canteen",
      cloudinaryImageId: "9ada441cb7c256cd6ae4bbe45e667576",
      locality: "Mettupalayam Road",
      areaName: "Tatabad",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "6459",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=11659668~p=1~eid=0000018e-0384-1d05-3962-36bf00980131~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=76622",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "324129",
      name: "Hmr - Grand Kitchen",
      cloudinaryImageId: "sxo9ssdzcunquvtrcvc6",
      locality: "Dr Nanjappa Road",
      areaName: "Gandhipuram",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "South Indian",
        "North Indian",
        "Chinese",
        "Tandoor",
      ],
      avgRating: 4.4,
      parentId: "96262",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹80 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=324129",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "663817",
      name: "Ambur Star Briyani",
      cloudinaryImageId: "a8e7ce3136780a9d0e7abba21276efb9",
      locality: "ATT Colony",
      areaName: "Gopalapuram",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "South Indian", "North Indian"],
      avgRating: 4.3,
      parentId: "5455",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹250",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=663817",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "306332",
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      locality: "Aavarampalayam Road",
      areaName: "Peelamedu",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11667403~p=2~eid=0000018e-0384-1d05-3962-36c000980251~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=306332",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "575570",
      name: "Nagerkovil Arya Bhavan",
      cloudinaryImageId: "yj6g7wugbi5qbvjtoqmr",
      locality: "Avinash Road",
      areaName: "Peelamedu",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese"],
      avgRating: 4.6,
      veg: true,
      parentId: "353249",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=575570",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "60959",
      name: "Denmarrk Drive-Inn Restaurant",
      cloudinaryImageId: "tokjoqdypfchrfxgxepm",
      locality: "Nehru Nagar",
      areaName: "Nehru Stadium",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese", "Arabian", "Tandoor", "Juices"],
      avgRating: 4.4,
      parentId: "4907",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹250",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=60959",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "51202",
      name: "Sree Annapoorna",
      cloudinaryImageId: "xkwvikmgv7usbbddqlmn",
      locality: "Gandhipuram",
      areaName: "Gandhipuram",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "South Indian", "Chinese", "Desserts"],
      avgRating: 4.6,
      parentId: "4732",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=11660864~p=3~eid=0000018e-0384-1d05-3962-36c100980311~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=51202",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "717397",
      name: "Sai Brindhavan",
      cloudinaryImageId: "b967e49b2cd70bf6f4733588a6a178e8",
      locality: "Dr.Radhakrishnan Street ASAP",
      areaName: "Gandhipuram",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "174945",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=717397",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "220791",
      name: "HSR Biriyani",
      cloudinaryImageId: "vhiwwmc0hl8xylaq1yhr",
      locality: "Subbana Gounder Layout",
      areaName: "Gandhipuram",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani"],
      avgRating: 4.3,
      parentId: "8998",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹250",
        discountTag: "GET",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=220791",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "310939",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "io3wjvgp4kdsuwhjdzbg",
      locality: "Diwan Bahadur Road",
      areaName: "RS Puram",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.5,
      veg: true,
      parentId: "582",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11510366~p=4~eid=0000018e-0384-1d05-3962-36c200980408~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=310939",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "580418",
      name: "Amote Patisserie",
      cloudinaryImageId: "jonkv3hf7mnizczj9wgf",
      locality: "RS Puram",
      areaName: "RS Puram",
      costForTwo: "₹600 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.5,
      parentId: "348047",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:20:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹80 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=580418",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "51335",
      name: "Shree Anandhaas",
      cloudinaryImageId: "tglkocgx1bejjhxble9t",
      locality: "Malaviya Street",
      areaName: "RAMNAGAR",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "4735",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=51335",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "359787",
      name: "Grameen Kulfi",
      cloudinaryImageId: "jfxpz1qwtk5motov6dqg",
      locality: "Aavarampalayam Road",
      areaName: "Peelamedu",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=11667405~p=5~eid=0000018e-0384-1d05-3962-36c300980565~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=359787",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "50071",
      name: "The Punjab Express",
      cloudinaryImageId: "fqhtjezjzgyrw9jr5f3q",
      locality: "RS Puram",
      areaName: "RS Puram",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chaat", "South Indian", "Punjabi"],
      avgRating: 4.4,
      parentId: "18458",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=50071",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "389520",
      name: "Dindigul Venu Biriyani Restaurant",
      cloudinaryImageId: "xstnybgrxw5rmb04lbdc",
      locality: "Gandhipuram",
      areaName: "Gandhipuram",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "South Indian"],
      avgRating: 4.2,
      parentId: "244845",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹40 OFF",
        subHeader: "ABOVE ₹400",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=389520",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "782624",
      name: "Indrani Mess",
      cloudinaryImageId: "614c35fda3992efd16c3543299fe39ae",
      locality: "Bharti Park",
      areaName: "Sai Baba Colony",
      costForTwo: "₹300 for two",
      cuisines: ["Seafood"],
      avgRating: 4.3,
      parentId: "107043",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=11660999~p=6~eid=0000018e-0384-1d05-3962-36c40098061d~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹250",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=782624",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "360225",
      name: "Biryani In Bucket",
      cloudinaryImageId: "zx1ncs76afm3sgntajvg",
      locality: "Dr. Rajendra Prasad Road",
      areaName: "Gandhipuram",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Indian", "Desserts", "Mangalorean"],
      avgRating: 4.4,
      parentId: "46774",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:20:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹80 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=360225",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "348158",
      name: "Covai Anganan Biriyani House",
      cloudinaryImageId: "riylxbx0j4kzeii1sef7",
      locality: "VCV Layout",
      areaName: "RS Puram",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "South Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "230662",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=348158",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "328526",
      name: "Kokkarako",
      cloudinaryImageId: "qxzlitw04jsduu5hxz4b",
      locality: "Thadagam Main Road",
      areaName: "Saibaba Colony",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "North Indian"],
      avgRating: 4,
      parentId: "11440",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11660855~p=7~eid=0000018e-0384-1d05-3962-36c500980703~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=328526",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "56745",
      name: "Famous Biryani House",
      cloudinaryImageId: "kf9omujdpq73tpyfcan0",
      locality: "Nehru Street",
      areaName: "Gandhipuram",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "South Indian", "Chettinad"],
      avgRating: 4.3,
      parentId: "18480",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹80 OFF",
        subHeader: "ABOVE ₹200",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=56745",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "457414",
      name: "Tibb's Frankie",
      cloudinaryImageId: "wjwdtlykrz7urfkk7gpn",
      locality: "Sir Shanmugam Road",
      areaName: "RS Puram",
      costForTwo: "₹200 for two",
      cuisines: ["Street Food"],
      avgRating: 4.4,
      parentId: "216056",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=11661012~p=8~eid=0000018e-0384-1d05-3962-36c600980808~srvts=1709455973637~45826",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  description: "OnlyOnSwiggy",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹40 OFF",
        subHeader: "ABOVE ₹400",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=457414",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "654259",
      name: "Istah Shawarmas",
      cloudinaryImageId: "0a37282845f641a5995d866285767803",
      locality: "Dr Rajendra Prasad Road",
      areaName: "Gandhipuram",
      costForTwo: "₹300 for two",
      cuisines: [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish",
      ],
      avgRating: 4.2,
      parentId: "468195",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  description: "OnlyOnSwiggy",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=654259",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "207713",
      name: "Burma Bhai",
      cloudinaryImageId: "jjlphwf40gnbmj8c9rvu",
      locality: "ATT Colony",
      areaName: "Nehru Stadium",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian", "Chinese", "North Indian", "South Indian"],
      avgRating: 4.5,
      parentId: "8583",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹45 OFF",
        subHeader: "ABOVE ₹225",
        discountTag: "GET",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=207713",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "61496",
      name: "All Seasons Veg Delicacies",
      cloudinaryImageId: "fut2uqfbg62jvth8akvx",
      locality: "Sai Baba Colony",
      areaName: "Sai Baba Colony",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese", "Biryani", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "18409",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-03 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=61496",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];
const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="search" />
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>© 2024 xyz Technologies Pvt Ltd</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        {dataList.map((res) => (
          <RestaurantCard key={res.info.id} dataSet={res} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
