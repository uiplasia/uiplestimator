import React, { useState } from 'react';
import Title from './Title';
import CategorySubcategoryStyleKHeader from './CategorySubcategoryStyleKHeader';
import './CategorySubcategoryStyleK.css';
import { motion } from 'framer-motion';
import arrow from '../assets/arrow.png';
import { Tooltip } from 'react-tooltip';
const pricingData = {
  "Structral Work": {
    "RCC Work": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F Cement, Sand , Conctrete And Steel Work As Per Structure Drawing",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F Cement, Sand , Conctrete And Steel Work As Per Structure Drawing",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F Cement, Sand , Conctrete And Steel Work As Per Structure Drawing",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F Cement, Sand , Conctrete And Steel Work As Per Structure Drawing",
        "percentage_market": 0.04
      }
    },
    "Steel Framing Work": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 600.0,
        "price": 24.0,
        "specification": "P&F Steel Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 600.0,
        "price": 24.0,
        "specification": "P&F Steel Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 600.0,
        "price": 24.0,
        "specification": "P&F Steel Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 600.0,
        "price": 24.0,
        "specification": "P&F Steel Work As Per Structure Drawing.",
        "percentage_market": 0.04
      }
    },
    "Pre Engineered Building Work": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 450.0,
        "price": 18.0,
        "specification": "P&F PEB Stucture Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 450.0,
        "price": 18.0,
        "specification": "P&F PEB Stucture Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 450.0,
        "price": 18.0,
        "specification": "P&F PEB Stucture Work As Per Structure Drawing.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 450.0,
        "price": 18.0,
        "specification": "P&F PEB Stucture Work As Per Structure Drawing.",
        "percentage_market": 0.04
      }
    }
  },
  "Brick & Masonry Work": {
    "Red Bricks": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 125.0,
        "price": 5.0,
        "specification": "Traditional Red Bricks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 125.0,
        "price": 5.0,
        "specification": "Traditional Red Bricks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 125.0,
        "price": 5.0,
        "specification": "Traditional Red Bricks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 125.0,
        "price": 5.0,
        "specification": "Traditional Red Bricks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      }
    },
    "AAC Blocks": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 160.0,
        "price": 6.4,
        "specification": "Fly Ash Cemented Blocks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 160.0,
        "price": 6.4,
        "specification": "Fly Ash Cemented Blocks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 160.0,
        "price": 6.4,
        "specification": "Fly Ash Cemented Blocks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 160.0,
        "price": 6.4,
        "specification": "Fly Ash Cemented Blocks Size of 4*3*9 will be Used For Making Walls.",
        "percentage_market": 0.04
      }
    },
    "Concrete Blocks": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      }
    },
    "Plaster Work": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 105.0,
        "price": 4.2,
        "specification": "P&F Of 1:4 Mixer of Sand & Cement On Masonry Wall Both Side.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 105.0,
        "price": 4.2,
        "specification": "P&F Of 1:4 Mixer of Sand & Cement On Masonry Wall Both Side.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 105.0,
        "price": 4.2,
        "specification": "P&F Of 1:4 Mixer of Sand & Cement On Masonry Wall Both Side.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 105.0,
        "price": 4.2,
        "specification": "P&F Of 1:4 Mixer of Sand & Cement On Masonry Wall Both Side.",
        "percentage_market": 0.04
      }
    },
    "WaterProofing": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F composite epoxy base waterproofing at 175/- per sqft.",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F composite epoxy base waterproofing at 175/- per sqft.",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F composite epoxy base waterproofing at 175/- per sqft.",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 250.0,
        "price": 10.0,
        "specification": "P&F composite epoxy base waterproofing at 175/- per sqft.",
        "percentage_market": 0.04
      }
    },
    "Kitchen Platform Base (Masonry, Vertical Support, Tiling Etc.)": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 1500.0,
        "price": 60.0,
        "specification": "P&F Kitchen Platfrom Base Work As Per Kitchen Design & Material Selection. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 1500.0,
        "price": 60.0,
        "specification": "P&F Kitchen Platfrom Base Work As Per Kitchen Design & Material Selection. ",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 1500.0,
        "price": 60.0,
        "specification": "P&F Kitchen Platfrom Base Work As Per Kitchen Design & Material Selection. ",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 1500.0,
        "price": 60.0,
        "specification": "P&F Kitchen Platfrom Base Work As Per Kitchen Design & Material Selection. ",
        "percentage_market": 0.04
      }
    },
    "Dismentalling Of Wall": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 180.0,
        "price": 7.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.04
      }
    }
  },
  "Stone Work (Platform , Wall Cladding , Dedo Work , Basin Counter)": {
    "Tiles": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 800.0,
        "price": 32.0,
        "specification": "P&F Size 800 mm X 1600 mm As Per Selection .Tiles Rate Up To 400/- Sqft. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 1050.0,
        "price": 52.5,
        "specification": "P&F Size 800 mm X 1600 mm As Per Selection .Tiles Rate Up To 650/- Sqft. ",
        "percentage_market": 0.05
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.06,
        "rate": 1200.0,
        "price": 72.0,
        "specification": "P&F Size 800 mm X 1600 mm As Per Selection .Tiles Rate Up To 800/- Sqft. ",
        "percentage_market": 0.06
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 1700.0,
        "price": 119.0,
        "specification": "P&F Size 800 mm X 1600 mm As Per Selection .Tiles Rate Up To 1300/- Sqft. ",
        "percentage_market": 0.07
      }
    },
    "Marble": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 500.0,
        "price": 20.0,
        "specification": "P&F Selected Marble with mirror/ diamond polish with white cement and adhesive. Marble range upto 250/- per sqft. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 650.0,
        "price": 32.5,
        "specification": "P&F Selected Marble With Mirror/Diamond Polish With White Cement And Adhesive. Marble range upto 400/- per sqft. ",
        "percentage_market": 0.05
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.06,
        "rate": 800.0,
        "price": 48.0,
        "specification": "P&F Selected Marble With Mirror/Diamond Polish With White Cement And Adhesive. Marble range upto 550/- per sqft. ",
        "percentage_market": 0.06
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 1050.0,
        "price": 73.5,
        "specification": "P&F Selected Marble With Mirror/Diamond Polish With White Cement And Adhesive. Marble range upto 650/- per sqft. ",
        "percentage_market": 0.07
      }
    },
    "Quartz": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 1200.0,
        "price": 84.0,
        "specification": "Providing and fixing selected colour and shade of Quartz for kitchen platforms, facias and similar locations of required size, joints treated with white cement, mixed with matching pigment, epoxy touch ups, including rubbing, curing, moulding and polishing to edges to give high gloss finish etc. complete. The job includes making of side verticles also and joints to be filled with pigment to match the shade of the slab including rubbing & polishing complete. Quartz rate upto 1500 sqft.",
        "percentage_market": 0.07
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 1500.0,
        "price": 105.0,
        "specification": "Providing and fixing selected colour and shade of Quartz for kitchen platforms, facias and similar locations of required size, joints treated with white cement, mixed with matching pigment, epoxy touch ups, including rubbing, curing, moulding and polishing to edges to give high gloss finish etc. complete. The job includes making of side verticles also and joints to be filled with pigment to match the shade of the slab including rubbing & polishing complete. Quartz rate upto 1500 sqft.",
        "percentage_market": 0.07
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 2000.0,
        "price": 140.0,
        "specification": "Providing and fixing selected colour and shade of Quartz for kitchen platforms, facias and similar locations of required size, joints treated with white cement, mixed with matching pigment, epoxy touch ups, including rubbing, curing, moulding and polishing to edges to give high gloss finish etc. complete. The job includes making of side verticles also and joints to be filled with pigment to match the shade of the slab including rubbing & polishing complete. Quartz rate upto 1500 sqft.",
        "percentage_market": 0.07
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 3000.0,
        "price": 210.0,
        "specification": "Providing and fixing selected colour and shade of Quartz for kitchen platforms, facias and similar locations of required size, joints treated with white cement, mixed with matching pigment, epoxy touch ups, including rubbing, curing, moulding and polishing to edges to give high gloss finish etc. complete. The job includes making of side verticles also and joints to be filled with pigment to match the shade of the slab including rubbing & polishing complete. Quartz rate upto 1500 sqft.",
        "percentage_market": 0.07
      }
    },
    "Granite": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.04,
        "rate": 50.0,
        "price": 2.0,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 35/- per sqft. ",
        "percentage_market": 0.04
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 65.0,
        "price": 3.25,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 50/- per sqft. ",
        "percentage_market": 0.05
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.06,
        "rate": 80.0,
        "price": 4.8,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 65/- per sqft. ",
        "percentage_market": 0.06
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.07,
        "rate": 100.0,
        "price": 7.0,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 85/- per sqft. ",
        "percentage_market": 0.07
      }
    }
  },
  "Doors & Windows Installation": {
    "Wooden": {
      "Premium": {
        "unit": "NOS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1050.0,
        "price": 420.0,
        "specification": "P&F Wooden Door/Flush Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1050.0,
        "price": 420.0,
        "specification": "P&F Wooden Door/Flush Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1050.0,
        "price": 420.0,
        "specification": "P&F Wooden Door/Flush Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1050.0,
        "price": 420.0,
        "specification": "P&F Wooden Door/Flush Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      }
    },
    "UPVC": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 750.0,
        "price": 300.0,
        "specification": "P&F UPVC Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 750.0,
        "price": 300.0,
        "specification": "P&F UPVC Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 750.0,
        "price": 300.0,
        "specification": "P&F UPVC Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 750.0,
        "price": 300.0,
        "specification": "P&F UPVC Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      }
    },
    "Aluminium": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 550.0,
        "price": 220.0,
        "specification": "P&F Aluminium Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 550.0,
        "price": 220.0,
        "specification": "P&F Aluminium Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 550.0,
        "price": 220.0,
        "specification": "P&F Aluminium Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 550.0,
        "price": 220.0,
        "specification": "P&F Aluminium Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      }
    },
    "Steel": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1350.0,
        "price": 540.0,
        "specification": "P&F Still Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1350.0,
        "price": 540.0,
        "specification": "P&F Still Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1350.0,
        "price": 540.0,
        "specification": "P&F Still Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 1350.0,
        "price": 540.0,
        "specification": "P&F Still Door With Provided/Selected Fittings.",
        "percentage_market": 0.4
      }
    }
  },
  "Plumbing Work - Concealed Work": {
    "PVC": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 130.0,
        "price": 2.6,
        "specification": "P&F PVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 130.0,
        "price": 2.6,
        "specification": "P&F PVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 130.0,
        "price": 2.6,
        "specification": "P&F PVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 130.0,
        "price": 2.6,
        "specification": "P&F PVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      }
    },
    "CPVC": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 150.0,
        "price": 3.0,
        "specification": "P&F CPVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 150.0,
        "price": 3.0,
        "specification": "P&F CPVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 150.0,
        "price": 3.0,
        "specification": "P&F CPVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 150.0,
        "price": 3.0,
        "specification": "P&F CPVC Concealed Pipe Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      }
    },
    "Copper": {
      "Premium": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 200.0,
        "price": 4.0,
        "specification": "P&F Copper Concealed Pipe Fittings (For Hot Flow) As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Premium plus": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 200.0,
        "price": 4.0,
        "specification": "P&F Copper Concealed Pipe Fittings (For Hot Flow) As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 200.0,
        "price": 4.0,
        "specification": "P&F Copper Concealed Pipe Fittings (For Hot Flow) As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      },
      "Ultra Luxury": {
        "unit": "SQFT",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 200.0,
        "price": 4.0,
        "specification": "P&F Copper Concealed Pipe Fittings (For Hot Flow) As Per Selected /Provided Brand.",
        "percentage_market": 0.02
      }
    }
  },
  "Plumbing Materials": {
    "Taps and Showers": {
      "Premium": {
        "unit": "NOS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.01,
        "rate": 1000.0,
        "price": 10.0,
        "specification": "Provision as per Actual",
        "percentage_market": 0.01
      },
      "Premium plus": {
        "unit": "NOS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.01,
        "rate": 1200.0,
        "price": 12.0,
        "specification": "Provision as per Actual",
        "percentage_market": 0.01
      },
      "Luxury": {
        "unit": "NOS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.01,
        "rate": 1800.0,
        "price": 18.0,
        "specification": "Provision as per Actual",
        "percentage_market": 0.01
      },
      "Ultra Luxury": {
        "unit": "NOS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.01,
        "rate": 2000.0,
        "price": 20.0,
        "specification": "Provision as per Actual",
        "percentage_market": 0.01
      }
    }
  },
  "Plumbing Work - Provision For Hot Water Source": {
    "Concealed Parts": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2500.0,
        "price": 12.5,
        "specification": "P&F Concealed Parts Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.005
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2500.0,
        "price": 12.5,
        "specification": "P&F Concealed Parts Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.005
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2500.0,
        "price": 12.5,
        "specification": "P&F Concealed Parts Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.005
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2500.0,
        "price": 12.5,
        "specification": "P&F Concealed Parts Fittings As Per Selected /Provided Brand.",
        "percentage_market": 0.005
      }
    }
  },
  "Plumbing Work": {
    "Labour/wct including Installations": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 15000.0,
        "price": 300.0,
        "specification": "Installation Work Including Needed Material With Adhesive As Per Site Situation.",
        "percentage_market": 0.02
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 15000.0,
        "price": 300.0,
        "specification": "Installation Work Including Needed Material With Adhesive As Per Site Situation.",
        "percentage_market": 0.02
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 15000.0,
        "price": 300.0,
        "specification": "Installation Work Including Needed Material With Adhesive As Per Site Situation.",
        "percentage_market": 0.02
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 15000.0,
        "price": 300.0,
        "specification": "Installation Work Including Needed Material With Adhesive As Per Site Situation.",
        "percentage_market": 0.02
      }
    }
  },
  "Flooring Solutions": {
    "Tiles": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 800.0,
        "price": 920.0,
        "specification": "P&f size not less then 800mm X 800mm / 800 mm X 1600 mm and as per selection with using of 3mm spacer at joints and filled with selected color of grout to match the tiles as per design. Tiles rate up to 400/- sqft. ",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 1050.0,
        "price": 1207.5,
        "specification": "P&f size not less then 800mm X 800mm / 800 mm X 1600 mm and as per selection with using of 3mm spacer at joints and filled with selected color of grout to match the tiles as per design. Tiles rate up to 650/- sqft. ",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 1300.0,
        "price": 1495.0,
        "specification": "P&f size not less then 800mm X 800mm / 800 mm X 1600 mm and as per selection with using of 3mm spacer at joints and filled with selected color of grout to match the tiles as per design. Tiles rate up to 900/- sqft. ",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 2000.0,
        "price": 2300.0,
        "specification": "P&f size not less then 800mm X 800mm / 800 mm X 1600 mm and as per selection with using of 3mm spacer at joints and filled with selected color of grout to match the tiles as per design. Tiles rate up to 1600/- sqft. ",
        "percentage_market": 1.15
      }
    },
    "Marble": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 500.0,
        "price": 575.0,
        "specification": "P&F Selected Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 250/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 650.0,
        "price": 747.5,
        "specification": "P&F Selected Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 400/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 800.0,
        "price": 920.0,
        "specification": "P&F Selected Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 550/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 1050.0,
        "price": 1207.5,
        "specification": "P&F Selected Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 800/- Per Sqft. ",
        "percentage_market": 1.15
      }
    },
    "Italian Marble": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 600.0,
        "price": 690.0,
        "specification": "P&F Selected Italian Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 350/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 800.0,
        "price": 920.0,
        "specification": "P&F Selected Italian Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 550/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 1100.0,
        "price": 1265.0,
        "specification": "P&F Selected Italian Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 850/- Per Sqft. ",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 1450.0,
        "price": 1667.5,
        "specification": "P&F Selected Italian Marble Flooring With Mirror/Diamond Polish With White Cement And Adhesive. Marble Range Upto 1200/- Per Sqft. ",
        "percentage_market": 1.15
      }
    },
    "Granite": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 50.0,
        "price": 57.5,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 35/- per sqft. ",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 65.0,
        "price": 74.75,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 50/- per sqft. ",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 80.0,
        "price": 92.0,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 65/- per sqft. ",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 100.0,
        "price": 115.0,
        "specification": "P&f Selected Granite As Per Selection And Complete With All Finishing Work. Granite range upto 85/- per sqft. ",
        "percentage_market": 1.15
      }
    },
    "Kotah Stone": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 300.0,
        "price": 30.0,
        "specification": "P&f Selected Kotah Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 400.0,
        "price": 40.0,
        "specification": "P&f Selected Kotah Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 550.0,
        "price": 55.0,
        "specification": "P&f Selected Kotah Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 800.0,
        "price": 80.0,
        "specification": "P&f Selected Kotah Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      }
    },
    "Kadappa Stone": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 300.0,
        "price": 30.0,
        "specification": "P&f Selected Kadppa Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 400.0,
        "price": 40.0,
        "specification": "P&f Selected Kadppa Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 550.0,
        "price": 55.0,
        "specification": "P&f Selected Kadppa Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 800.0,
        "price": 80.0,
        "specification": "P&f Selected Kadppa Stone As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      }
    },
    "Vinyl": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 50.0,
        "price": 5.0,
        "specification": "P&f Selected Vinyl As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 70.0,
        "price": 7.0,
        "specification": "P&f Selected Vinyl As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 100.0,
        "price": 10.0,
        "specification": "P&f Selected Vinyl As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 200.0,
        "price": 20.0,
        "specification": "P&f Selected Vinyl As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      }
    },
    "Wooden": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 600.0,
        "price": 60.0,
        "specification": "P&f Selected Wooden As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 850.0,
        "price": 85.0,
        "specification": "P&f Selected Wooden As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 1250.0,
        "price": 125.0,
        "specification": "P&f Selected Wooden As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 1600.0,
        "price": 160.0,
        "specification": "P&f Selected Wooden As Per Selection And Complete With All Finishing Work. Cost As Per Architect Design.",
        "percentage_market": 0.1
      }
    },
    "Floor Polishing": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 35.0,
        "price": 40.25,
        "specification": "Mirror/diamond polish.",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 45.0,
        "price": 51.75,
        "specification": "Mirror/diamond polish.",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 60.0,
        "price": 69.0,
        "specification": "Mirror/diamond polish.",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 80.0,
        "price": 92.0,
        "specification": "Mirror/diamond polish.",
        "percentage_market": 1.15
      }
    }
  },
  "Electrical Work": {
    "Distribution Board Work": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      }
    },
    "Wiring": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.001
      }
    },
    "Light Points": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 800.0,
        "price": 64.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.08
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 800.0,
        "price": 64.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.08
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 800.0,
        "price": 64.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.08
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 800.0,
        "price": 64.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.08
      }
    },
    "16Amp Plug Points": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1400.0,
        "price": 4.2,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.003
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1400.0,
        "price": 4.2,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.003
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1400.0,
        "price": 4.2,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.003
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1400.0,
        "price": 4.2,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.003
      }
    },
    "6Amp Plug Points": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 800.0,
        "price": 16.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.02
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 800.0,
        "price": 16.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.02
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 800.0,
        "price": 16.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.02
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.02,
        "rate": 800.0,
        "price": 16.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.02
      }
    },
    "USB-C & Conventional": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1600.0,
        "price": 8.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.005
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1600.0,
        "price": 8.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.005
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1600.0,
        "price": 8.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.005
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1600.0,
        "price": 8.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.005
      }
    },
    "CAT - 6": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 1000.0,
        "price": 4.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.004
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 1000.0,
        "price": 4.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.004
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 1000.0,
        "price": 4.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.004
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 1000.0,
        "price": 4.0,
        "specification": "As per design, ledger and specification.",
        "percentage_market": 0.004
      }
    }
  },
  "Ceiling Work": {
    "Gypsum/CFG Ceiling": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.12,
        "rate": 65.0,
        "price": 72.8,
        "specification": "False Ceiling Made Of CFG Board With Heavy Bottom Channel.",
        "percentage_market": 1.12
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.12,
        "rate": 65.0,
        "price": 72.8,
        "specification": "False Ceiling Made Of CFG Board With Heavy Bottom Channel.+ Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 1.12
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.12,
        "rate": 65.0,
        "price": 72.8,
        "specification": "False Ceiling Made Of CFG Board With Heavy Bottom Channel.+ Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 1.12
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.12,
        "rate": 65.0,
        "price": 72.8,
        "specification": "False Ceiling Made Of CFG Board With Heavy Bottom Channel.+ Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.+Adding Some Brass As Per Design.",
        "percentage_market": 1.12
      }
    },
    "POP Ceiling": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 55.0,
        "price": 63.25,
        "specification": "POP Ceiling Made Of POP Board With Heavy Bottom Channel.",
        "percentage_market": 1.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 55.0,
        "price": 63.25,
        "specification": "POP Ceiling Made Of POP Board With Heavy Bottom Channel.",
        "percentage_market": 1.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 55.0,
        "price": 63.25,
        "specification": "POP Ceiling Made Of POP Board With Heavy Bottom Channel.",
        "percentage_market": 1.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.15,
        "rate": 55.0,
        "price": 63.25,
        "specification": "POP Ceiling Made Of POP Board With Heavy Bottom Channel.",
        "percentage_market": 1.15
      }
    },
    "Wooden Ceiling": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 550.0,
        "price": 27.5,
        "specification": "Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 0.05
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 630.0,
        "price": 31.5,
        "specification": "Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 0.05
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 630.0,
        "price": 31.5,
        "specification": "Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 0.05
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.05,
        "rate": 630.0,
        "price": 31.5,
        "specification": "Wooden Ceiling Made Out From 18mm Thick Plywood With Veneer in Polish Finish As Per Match To Interiors.",
        "percentage_market": 0.05
      }
    },
    "GI Plank Ceiling": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 300.0,
        "price": 16.5,
        "specification": "P&F Of GI Plank Of Given Company To Be Fixed.",
        "percentage_market": 0.055
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 300.0,
        "price": 16.5,
        "specification": "P&F Of GI Plank Of Given Company To Be Fixed.",
        "percentage_market": 0.055
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 300.0,
        "price": 16.5,
        "specification": "P&F Of GI Plank Of Given Company To Be Fixed.",
        "percentage_market": 0.055
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 300.0,
        "price": 16.5,
        "specification": "P&F Of GI Plank Of Given Company To Be Fixed.",
        "percentage_market": 0.055
      }
    },
    "Hilux (Calcium Silicate) Ceiling": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 125.0,
        "price": 12.5,
        "specification": "P&F Of Perforated 2x2 Ceiling To Be Suspended With Aluminium Grade Patti As Per Selected Design.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 125.0,
        "price": 12.5,
        "specification": "P&F Of Perforated 2x2 Ceiling To Be Suspended With Aluminium Grade Patti As Per Selected Design.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 125.0,
        "price": 12.5,
        "specification": "P&F Of Perforated 2x2 Ceiling To Be Suspended With Aluminium Grade Patti As Per Selected Design.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 125.0,
        "price": 12.5,
        "specification": "P&F Of Perforated 2x2 Ceiling To Be Suspended With Aluminium Grade Patti As Per Selected Design.",
        "percentage_market": 0.1
      }
    },
    "Shera Plank And Melamine": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 125.0,
        "price": 6.875,
        "specification": "P&F Of Shera Sheet Of Given Company To Be Fixed On Aluminium Pipe.",
        "percentage_market": 0.055
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 125.0,
        "price": 6.875,
        "specification": "P&F Of Shera Sheet Of Given Company To Be Fixed On Aluminium Pipe.",
        "percentage_market": 0.055
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 125.0,
        "price": 6.875,
        "specification": "P&F Of Shera Sheet Of Given Company To Be Fixed On Aluminium Pipe.",
        "percentage_market": 0.055
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.055,
        "rate": 125.0,
        "price": 6.875,
        "specification": "P&F Of Shera Sheet Of Given Company To Be Fixed On Aluminium Pipe.",
        "percentage_market": 0.055
      }
    }
  },
  "HVAC System Provision On Site": {
    "Copper piping work": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 140.0,
        "price": 11.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.08
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 140.0,
        "price": 14.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.14,
        "rate": 140.0,
        "price": 19.6,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.14
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.2,
        "rate": 140.0,
        "price": 28.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.2
      }
    },
    "Electric Cableing": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 120.0,
        "price": 9.6,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.08
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 120.0,
        "price": 12.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.14,
        "rate": 120.0,
        "price": 16.8,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.14
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.2,
        "rate": 120.0,
        "price": 24.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.2
      }
    },
    "Drain Pipe": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.08,
        "rate": 40.0,
        "price": 3.2,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.08
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 40.0,
        "price": 4.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.14,
        "rate": 40.0,
        "price": 5.6,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.14
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.2,
        "rate": 40.0,
        "price": 8.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.2
      }
    },
    "ODU Stand": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 2000.0,
        "price": 6.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.003
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 2000.0,
        "price": 6.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.003
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.005
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.005
      }
    }
  },
  "Paint and Wall Finishes": {
    "Oil Based": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 85.0,
        "price": 161.5,
        "specification": "Oil Based Paint.",
        "percentage_market": 1.9
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 85.0,
        "price": 161.5,
        "specification": "Oil Based Paint.",
        "percentage_market": 1.9
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 85.0,
        "price": 161.5,
        "specification": "Oil Based Paint.",
        "percentage_market": 1.9
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 85.0,
        "price": 161.5,
        "specification": "Oil Based Paint.",
        "percentage_market": 1.9
      }
    },
    "Acrylic": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 30.0,
        "price": 57.0,
        "specification": "Acrylic Paint.",
        "percentage_market": 1.9
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 30.0,
        "price": 57.0,
        "specification": "Acrylic Paint.",
        "percentage_market": 1.9
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 30.0,
        "price": 57.0,
        "specification": "Acrylic Paint.",
        "percentage_market": 1.9
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.9,
        "rate": 30.0,
        "price": 57.0,
        "specification": "Acrylic Paint.",
        "percentage_market": 1.9
      }
    },
    "POP Puning": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 30.0,
        "price": 12.0,
        "specification": "P&F POP Punning On Wall For Surface Levelling And Finishing As Per Site.",
        "percentage_market": 0.4
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 30.0,
        "price": 12.0,
        "specification": "P&F POP Punning On Wall For Surface Levelling And Finishing As Per Site.",
        "percentage_market": 0.4
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 30.0,
        "price": 12.0,
        "specification": "P&F POP Punning On Wall For Surface Levelling And Finishing As Per Site.",
        "percentage_market": 0.4
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.4,
        "rate": 30.0,
        "price": 12.0,
        "specification": "P&F POP Punning On Wall For Surface Levelling And Finishing As Per Site.",
        "percentage_market": 0.4
      }
    },
    "Wall Paper": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 130.0,
        "price": 13.0,
        "specification": "P&F Designer Wallpaper As Per Selection. Design Apply On Wall As Per Drawing.",
        "percentage_market": 0.1
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 150.0,
        "price": 15.0,
        "specification": "P&F Designer Wallpaper As Per Selection. Design Apply On Wall As Per Drawing.",
        "percentage_market": 0.1
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 190.0,
        "price": 19.0,
        "specification": "P&F Designer Wallpaper As Per Selection. Design Apply On Wall As Per Drawing.",
        "percentage_market": 0.1
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.1,
        "rate": 300.0,
        "price": 30.0,
        "specification": "P&F Designer Wallpaper As Per Selection. Design Apply On Wall As Per Drawing.",
        "percentage_market": 0.1
      }
    }
  },
  "Lighting Solutions": {
    "Panel Lights": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.002,
        "rate": 1800.0,
        "price": 3.6,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.002
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 1800.0,
        "price": 7.2,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.004
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.006,
        "rate": 1800.0,
        "price": 10.8,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.006
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.01,
        "rate": 1800.0,
        "price": 18.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.01
      }
    },
    "COB": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.0,
        "rate": 1800.0,
        "price": 1800.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 1.0
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 1.8,
        "rate": 1800.0,
        "price": 3240.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 1.8
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 3.0,
        "rate": 1800.0,
        "price": 5400.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 3.0
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 5.0,
        "rate": 1800.0,
        "price": 9000.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 5.0
      }
    },
    "Surface Lights": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.002,
        "rate": 1100.0,
        "price": 2.2,
        "specification": "Provision up to 1100/-.",
        "percentage_market": 0.002
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.002,
        "rate": 1100.0,
        "price": 2.2,
        "specification": "Provision up to 1100/-.",
        "percentage_market": 0.002
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.002,
        "rate": 1100.0,
        "price": 2.2,
        "specification": "Provision up to 1100/-.",
        "percentage_market": 0.002
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.002,
        "rate": 1100.0,
        "price": 2.2,
        "specification": "Provision up to 1100/-.",
        "percentage_market": 0.002
      }
    },
    "Tube Lights": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2500.0,
        "price": 2.5,
        "specification": "Provision up to 2500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2500.0,
        "price": 2.5,
        "specification": "Provision up to 2500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2500.0,
        "price": 2.5,
        "specification": "Provision up to 2500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2500.0,
        "price": 2.5,
        "specification": "Provision up to 2500/-.",
        "percentage_market": 0.001
      }
    },
    "Fan": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.007,
        "rate": 7500.0,
        "price": 52.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.007
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.007,
        "rate": 9000.0,
        "price": 63.0,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.007
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.007,
        "rate": 12500.0,
        "price": 87.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.007
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.007,
        "rate": 17000.0,
        "price": 119.0,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.007
      }
    },
    "Exhaust Fan": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 2000.0,
        "price": 8.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.004
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 2000.0,
        "price": 8.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.004
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 2000.0,
        "price": 8.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.004
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.004,
        "rate": 2000.0,
        "price": 8.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.004
      }
    },
    "Decorative Lights": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      }
    },
    "Outdoor Lights": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1800.0,
        "price": 1.8,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1800.0,
        "price": 1.8,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1800.0,
        "price": 1.8,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1800.0,
        "price": 1.8,
        "specification": "As Per Site Requirement. ",
        "percentage_market": 0.001
      }
    }
  },
  "Window Treatment": {
    "Main Curtains": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 550.0,
        "price": 82.5,
        "specification": "P&F Curtain Channel As Per Selection. Fabric Range Upto 350/- Sqft.",
        "percentage_market": 0.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 650.0,
        "price": 97.5,
        "specification": "P&F Curtain Channel As Per Selection. Fabric Range Upto 450/- Sqft.",
        "percentage_market": 0.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 900.0,
        "price": 135.0,
        "specification": "P&F Curtain Channel As Per Selection. Fabric Range Upto 700/- Sqft.",
        "percentage_market": 0.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 1250.0,
        "price": 187.5,
        "specification": "P&F Curtain Channel As Per Selection. Fabric Range Upto 1050/- Sqft.",
        "percentage_market": 0.15
      }
    },
    "Main + Sheer Curtains": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 1000.0,
        "price": 150.0,
        "specification": "P&F Sheer Curtain & Black Out Curtain As Per Selection Design & Color Of Fabric. Fabric Range As Per Selection.",
        "percentage_market": 0.15
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 1300.0,
        "price": 195.0,
        "specification": "P&F Sheer Curtain & Black Out Curtain As Per Selection Design & Color Of Fabric. Fabric Range As Per Selection.",
        "percentage_market": 0.15
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 1800.0,
        "price": 270.0,
        "specification": "P&F Sheer Curtain & Black Out Curtain As Per Selection Design & Color Of Fabric. Fabric Range As Per Selection.",
        "percentage_market": 0.15
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.15,
        "rate": 2500.0,
        "price": 375.0,
        "specification": "P&F Sheer Curtain & Black Out Curtain As Per Selection Design & Color Of Fabric. Fabric Range As Per Selection.",
        "percentage_market": 0.15
      }
    },
    "Blinds": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.13,
        "rate": 350.0,
        "price": 45.5,
        "specification": "P&F Blinds As Per Selection. Fabric Range Upto 200/- Sqft.",
        "percentage_market": 0.13
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.13,
        "rate": 400.0,
        "price": 52.0,
        "specification": "P&F Blinds As Per Selection. Fabric Range Upto 250/- Sqft.",
        "percentage_market": 0.13
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.13,
        "rate": 650.0,
        "price": 84.5,
        "specification": "P&F Blinds As Per Selection. Fabric Range Upto 500/- Sqft.",
        "percentage_market": 0.13
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.13,
        "rate": 1200.0,
        "price": 156.0,
        "specification": "P&F Blinds As Per Selection. Fabric Range Upto 1100/- Sqft.",
        "percentage_market": 0.13
      }
    },
    "Shades": {
      "Premium": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.03,
        "rate": 600.0,
        "price": 18.0,
        "specification": "P&F of M.S.Shade On M.S.Pipe As Per Designed Design Detail.",
        "percentage_market": 0.03
      },
      "Premium plus": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.03,
        "rate": 700.0,
        "price": 21.0,
        "specification": "P&F of M.S.Shade On M.S.Pipe As Per Designed Design Detail.",
        "percentage_market": 0.03
      },
      "Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.03,
        "rate": 900.0,
        "price": 27.0,
        "specification": "P&F of M.S.Shade On M.S.Pipe As Per Designed Design Detail.",
        "percentage_market": 0.03
      },
      "Ultra Luxury": {
        "unit": "Sqft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.03,
        "rate": 1250.0,
        "price": 37.5,
        "specification": "P&F of M.S.Shade On M.S.Pipe As Per Designed Design Detail.",
        "percentage_market": 0.03
      }
    },
    "Installation Charges": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 5000.0,
        "price": 5.0,
        "specification": "Installation work including needed material with adhesive as per site situation.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6500.0,
        "price": 6.5,
        "specification": "Installation work including needed material with adhesive as per site situation.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Installation work including needed material with adhesive as per site situation.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 16000.0,
        "price": 16.0,
        "specification": "Installation work including needed material with adhesive as per site situation.",
        "percentage_market": 0.001
      }
    }
  },
  "Readymade Furniture": {
    "Bench - 2 Seater Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      }
    },
    "Bench": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 13000.0,
        "price": 13.0,
        "specification": "Provision up to 13000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      }
    },
    "Temple": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 35000.0,
        "price": 35.0,
        "specification": "Provision up to 35000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 60000.0,
        "price": 60.0,
        "specification": "Provision up to 60000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 100000.0,
        "price": 100.0,
        "specification": "Provision up to 100000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 200000.0,
        "price": 200.0,
        "specification": "Provision up to 200000/-.",
        "percentage_market": 0.001
      }
    },
    "Swing - 1 Seater": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 28500.0,
        "price": 28.5,
        "specification": "Provision up to 28500/-.",
        "percentage_market": 0.001
      }
    },
    "Swing - 2 Seater": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 40000.0,
        "price": 40.0,
        "specification": "Provision up to 40000/-.",
        "percentage_market": 0.001
      }
    },
    "Swing - 3 Seater": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 65000.0,
        "price": 65.0,
        "specification": "Provision up to 65000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 100000.0,
        "price": 100.0,
        "specification": "Provision up to 100000/-.",
        "percentage_market": 0.001
      }
    },
    "Sofa - 3 Seater": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 70000.0,
        "price": 70.0,
        "specification": "Provision up to 70000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 100000.0,
        "price": 100.0,
        "specification": "Provision up to 100000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 140000.0,
        "price": 140.0,
        "specification": "Provision up to 140000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 225000.0,
        "price": 225.0,
        "specification": "Provision up to 225000/-.",
        "percentage_market": 0.001
      }
    },
    "Centre Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 23000.0,
        "price": 23.0,
        "specification": "Provision up to 23000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 28000.0,
        "price": 28.0,
        "specification": "Provision up to 28000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 40000.0,
        "price": 40.0,
        "specification": "Provision up to 40000/-.",
        "percentage_market": 0.001
      }
    },
    "Corner Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 16000.0,
        "price": 16.0,
        "specification": "Provision up to 16000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 18500.0,
        "price": 18.5,
        "specification": "Provision up to 18500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 23500.0,
        "price": 23.5,
        "specification": "Provision up to 23500/-.",
        "percentage_market": 0.001
      }
    },
    "Dining Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 40000.0,
        "price": 40.0,
        "specification": "Provision up to 40000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 65000.0,
        "price": 65.0,
        "specification": "Provision up to 65000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 90000.0,
        "price": 90.0,
        "specification": "Provision up to 90000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 135000.0,
        "price": 135.0,
        "specification": "Provision up to 135000/-.",
        "percentage_market": 0.001
      }
    },
    "Console Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 13500.0,
        "price": 13.5,
        "specification": "Provision up to 13500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 22000.0,
        "price": 22.0,
        "specification": "Provision up to 22000/-.",
        "percentage_market": 0.001
      }
    },
    "Bar Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 21000.0,
        "price": 21.0,
        "specification": "Provision up to 21000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 30000.0,
        "price": 30.0,
        "specification": "Provision up to 30000/-.",
        "percentage_market": 0.001
      }
    },
    "Bedside table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9500.0,
        "price": 9.5,
        "specification": "Provision up to 9500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 11000.0,
        "price": 11.0,
        "specification": "Provision up to 11000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      }
    },
    "Coffee table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 13500.0,
        "price": 13.5,
        "specification": "Provision up to 13500/-.",
        "percentage_market": 0.001
      }
    },
    "Computer table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 27000.0,
        "price": 27.0,
        "specification": "Provision up to 27000/-.",
        "percentage_market": 0.001
      }
    },
    "Children's table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 27000.0,
        "price": 27.0,
        "specification": "Provision up to 27000/-.",
        "percentage_market": 0.001
      }
    },
    "Conference & meeting table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 22500.0,
        "price": 22.5,
        "specification": "Provision up to 22500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 26000.0,
        "price": 26.0,
        "specification": "Provision up to 26000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 30000.0,
        "price": 30.0,
        "specification": "Provision up to 30000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 38000.0,
        "price": 38.0,
        "specification": "Provision up to 38000/-.",
        "percentage_market": 0.001
      }
    },
    "Dressing table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 27000.0,
        "price": 27.0,
        "specification": "Provision up to 27000/-.",
        "percentage_market": 0.001
      }
    },
    "Multifunctional table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 22500.0,
        "price": 22.5,
        "specification": "Provision up to 22500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 26000.0,
        "price": 26.0,
        "specification": "Provision up to 26000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 30000.0,
        "price": 30.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 38000.0,
        "price": 38.0,
        "specification": "Provision up to 38000/-.",
        "percentage_market": 0.001
      }
    },
    "Study table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 27000.0,
        "price": 27.0,
        "specification": "Provision up to 27000/-.",
        "percentage_market": 0.001
      }
    },
    "Bar chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      }
    },
    "Bar stool": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      }
    },
    "Armchair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Wing chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Dining chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      }
    },
    "Junior dining chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6500.0,
        "price": 6.5,
        "specification": "Provision up to 6500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6500.0,
        "price": 6.5,
        "specification": "Provision up to 6500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6500.0,
        "price": 6.5,
        "specification": "Provision up to 6500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6500.0,
        "price": 6.5,
        "specification": "Provision up to 6500/-.",
        "percentage_market": 0.001
      }
    },
    "Foot stool (Ottoman)": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Provision up to 7500/-.",
        "percentage_market": 0.001
      }
    },
    "Pouffe": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Stools": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Study Chair - Wooden": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      }
    },
    "Study Chair - Revolving": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      }
    },
    "Garden chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Balcony Chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Office Chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      }
    },
    "Rocking Chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      }
    },
    "Recliner Chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 25000.0,
        "price": 25.0,
        "specification": "Provision up to 25000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 25000.0,
        "price": 25.0,
        "specification": "Provision up to 25000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 25000.0,
        "price": 25.0,
        "specification": "Provision up to 25000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 25000.0,
        "price": 25.0,
        "specification": "Provision up to 25000/-.",
        "percentage_market": 0.001
      }
    },
    "Nursery furniture - Baby chairs & high chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10500.0,
        "price": 10.5,
        "specification": "Provision up to 10500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10500.0,
        "price": 10.5,
        "specification": "Provision up to 10500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10500.0,
        "price": 10.5,
        "specification": "Provision up to 10500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10500.0,
        "price": 10.5,
        "specification": "Provision up to 10500/-.",
        "percentage_market": 0.001
      }
    },
    "Gaming chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Bed": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 55000.0,
        "price": 55.0,
        "specification": "Bed - Plain + Designer Laminate Finish",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 70000.0,
        "price": 70.0,
        "specification": "Bed - Laminate + Veneer Finish",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 95000.0,
        "price": 95.0,
        "specification": "Bed - Laminate + Ducco/Leather Finish",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 120000.0,
        "price": 120.0,
        "specification": "Bed - PU + Veneer + Fabric Finish",
        "percentage_market": 0.001
      }
    },
    "Dressing/Toilet Mirror": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7500.0,
        "price": 7.5,
        "specification": "Dressing/Toilet Mirror - Plain",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9500.0,
        "price": 9.5,
        "specification": "Dressing/Toilet Mirror - Plain/Led Touch Mirror",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Dressing/Toilet Mirror - Plain//Led Touch/Decorative Mirror",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": NaN,
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 16000.0,
        "price": 16.0,
        "specification": "Dressing/Toilet Mirror - Led Touch/Decorative Mirror",
        "percentage_market": 0.001
      }
    },
    "Wardrobes - Hinged(Openable)": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 55000.0,
        "price": 55.0,
        "specification": "Wardrobes - Hinged(Openable) - Plain + Designer Laminate Finish",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 70000.0,
        "price": 70.0,
        "specification": "Wardrobes - Hinged(Openable) - Laminate + Veneer Finish",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 95000.0,
        "price": 95.0,
        "specification": "Wardrobes - Hinged(Openable) - Laminate + Ducco/Leather/Mirror Finish",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 120000.0,
        "price": 120.0,
        "specification": "Wardrobes - Hinged(Openable) - PU + Veneer + Fabric /Mirror Finish",
        "percentage_market": 0.001
      }
    },
    "Wardrobes - Sliding": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 70000.0,
        "price": 70.0,
        "specification": "Wardrobes - Sliding - Plain + Designer Laminate Finish",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 95000.0,
        "price": 95.0,
        "specification": "Wardrobes - Sliding - Laminate + Veneer Finish",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 125000.0,
        "price": 125.0,
        "specification": "Wardrobes - Sliding - Laminate + Ducco/Leather/Mirror Finish",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 165000.0,
        "price": 165.0,
        "specification": "Wardrobes - Sliding - PU + Veneer + Fabric /Mirror Finish",
        "percentage_market": 0.001
      }
    },
    "Wardrobes -  Wardrobes Loft": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 35000.0,
        "price": 35.0,
        "specification": "Wardrobes -  Wardrobes Loft - Plain + Designer Laminate Finish",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 50000.0,
        "price": 50.0,
        "specification": "Wardrobes -  Wardrobes Loft - Laminate + Veneer Finish",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 75000.0,
        "price": 75.0,
        "specification": "Wardrobes -  Wardrobes Loft - Laminate + Ducco/Leather/Mirror Finish",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 95000.0,
        "price": 0.0,
        "specification": "Wardrobes -  Wardrobes Loft - PU + Veneer + Fabric /Mirror Finish",
        "percentage_market": NaN
      }
    },
    "Outdoor Furniture - Chair": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 4000.0,
        "price": 4.0,
        "specification": "Provision up to 4000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 5500.0,
        "price": 5.5,
        "specification": "Provision up to 5500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7000.0,
        "price": 7.0,
        "specification": "Provision up to 7000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Outdoor Furniture - Sofa": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 25000.0,
        "price": 25.0,
        "specification": "Provision up to 25000/-.",
        "percentage_market": 0.001
      }
    },
    "Outdoor Furniture - Centre Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 4000.0,
        "price": 4.0,
        "specification": "Provision up to 4000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 5500.0,
        "price": 5.5,
        "specification": "Provision up to 5500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7000.0,
        "price": 7.0,
        "specification": "Provision up to 7000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      }
    },
    "Outdoor Furniture - Coffee Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 3000.0,
        "price": 3.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 4500.0,
        "price": 4.5,
        "specification": "Provision up to 4500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 6000.0,
        "price": 6.0,
        "specification": "Provision up to 6000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9500.0,
        "price": 9.5,
        "specification": "Provision up to 9500/-.",
        "percentage_market": 0.001
      }
    },
    "Outdoor Furniture - Movable Table": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      }
    },
    "Outdoor Furniture - Breakfast Trolly": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      }
    },
    "Shoe Rack": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 18500.0,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 24000.0,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 27000.0,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 35000.0,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "Chest Of Drawer": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 18500.0,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 24000.0,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 27000.0,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 35000.0,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "TV Cabinet -": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "TV Cabinet": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      }
    },
    "Bar Cabinet -": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "Book Storage Cabinet": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      }
    },
    "Book Storage Cabinet -": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "Crockery Cabinet -": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Paint/Laminate Finish",
        "percentage_market": NaN
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Ducco Finish",
        "percentage_market": NaN
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "PU Finish",
        "percentage_market": NaN
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": "Veneer In Polish/PU Finish",
        "percentage_market": NaN
      }
    },
    "Dressing Storage - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 12500.0,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Dressing Storage - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 15000.0,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Dressing Storage - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 20000.0,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Dressing Storage - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": 27000.0,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Luggage Storage - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Luggage Storage - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Luggage Storage - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Luggage Storage - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Study Storage - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Study Storage - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Study Storage - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Study Storage - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Toy Storage - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Toy Storage - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Toy Storage - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Toy Storage - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Storage Cabinet - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Storage Cabinet - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Storage Cabinet - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Storage Cabinet - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Vanity Cabinet - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Vanity Cabinet - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Vanity Cabinet - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Vanity Cabinet - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Aluminium Profile With Glass Shutter - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Aluminium Profile With Glass Shutter - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Aluminium Profile With Glass Shutter - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Aluminium Profile With Glass Shutter- Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Cloth Organiser - Paint/Laminate Finish": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Cloth Organiser - Ducco Finish": {
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Cloth Organiser - PU Finish": {
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    },
    "Cloth Organiser - Veneer In Polish/PU Finish": {
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.0,
        "rate": NaN,
        "price": 0.0,
        "specification": NaN,
        "percentage_market": NaN
      }
    }
  },
  "Soft Furnishing": {
    "Cushions": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1500.0,
        "price": 7.5,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.005
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 1800.0,
        "price": 9.0,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.005
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 2200.0,
        "price": 11.0,
        "specification": "Provision up to 2200/-.",
        "percentage_market": 0.005
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.005,
        "rate": 3000.0,
        "price": 15.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.005
      }
    },
    "Rugs": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12000.0,
        "price": 12.0,
        "specification": "Provision up to 12000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 36000.0,
        "price": 36.0,
        "specification": "Provision up to 36000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Throws": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 3000.0,
        "price": 3.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 5000.0,
        "price": 5.0,
        "specification": "Provision up to 5000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7000.0,
        "price": 7.0,
        "specification": "Provision up to 7000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 13000.0,
        "price": 13.0,
        "specification": "Provision up to 13000/-.",
        "percentage_market": 0.001
      }
    },
    "Bedsheets": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1500.0,
        "price": 4.5,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.003
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1800.0,
        "price": 5.4,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.003
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 2200.0,
        "price": 6.6,
        "specification": "Provision up to 2200/-.",
        "percentage_market": 0.003
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 3000.0,
        "price": 9.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.003
      }
    },
    "Pillows": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.006,
        "rate": 1500.0,
        "price": 9.0,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.006
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.006,
        "rate": 1800.0,
        "price": 10.8,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.006
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.006,
        "rate": 2200.0,
        "price": 13.2,
        "specification": "Provision up to 2200/-.",
        "percentage_market": 0.006
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.006,
        "rate": 3000.0,
        "price": 18.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.006
      }
    },
    "Blankets": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1500.0,
        "price": 4.5,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.003
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 1800.0,
        "price": 5.4,
        "specification": "Provision up to 1800/-.",
        "percentage_market": 0.003
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 2200.0,
        "price": 6.6,
        "specification": "Provision up to 2200/-.",
        "percentage_market": 0.003
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.003,
        "rate": 3000.0,
        "price": 9.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.003
      }
    },
    "Door Mat": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1500.0,
        "price": 1.5,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2000.0,
        "price": 2.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2500.0,
        "price": 2.5,
        "specification": "Provision up to 2500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 3000.0,
        "price": 3.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.001
      }
    }
  },
  "Artifacts and Accessories": {
    "Paintings/Photo Frames": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 33500.0,
        "price": 33.5,
        "specification": "Provision up to 33500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 60000.0,
        "price": 60.0,
        "specification": "Provision up to 60000/-.",
        "percentage_market": 0.001
      }
    },
    "Stencil Work": {
      "Premium": {
        "unit": "Rft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1000.0,
        "price": 1.0,
        "specification": "Provision up to 1000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Rft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1200.0,
        "price": 1.2,
        "specification": "Provision up to 1200/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Rft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 1500.0,
        "price": 1.5,
        "specification": "Provision up to 1500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Rft",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 2000.0,
        "price": 2.0,
        "specification": "Provision up to 2000/-.",
        "percentage_market": 0.001
      }
    },
    "Sculptures": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 11000.0,
        "price": 11.0,
        "specification": "Provision up to 11000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 37500.0,
        "price": 37.5,
        "specification": "Provision up to 37500/-.",
        "percentage_market": 0.001
      }
    },
    "Vases": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 3000.0,
        "price": 3.0,
        "specification": "Provision up to 3000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 7000.0,
        "price": 7.0,
        "specification": "Provision up to 7000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8500.0,
        "price": 8.5,
        "specification": "Provision up to 8500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 13000.0,
        "price": 13.0,
        "specification": "Provision up to 13000/-.",
        "percentage_market": 0.001
      }
    },
    "Planters": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 4000.0,
        "price": 4.0,
        "specification": "Provision up to 4000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 8000.0,
        "price": 8.0,
        "specification": "Provision up to 8000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 15000.0,
        "price": 15.0,
        "specification": "Provision up to 15000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 20000.0,
        "price": 20.0,
        "specification": "Provision up to 20000/-.",
        "percentage_market": 0.001
      }
    },
    "Other Decorative": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 51000.0,
        "price": 51.0,
        "specification": "Provision up to 51000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 65000.0,
        "price": 65.0,
        "specification": "Provision up to 65000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 77000.0,
        "price": 77.0,
        "specification": "Provision up to 77000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 128000.0,
        "price": 128.0,
        "specification": "Provision up to 128000/-.",
        "percentage_market": 0.001
      }
    },
    "Kitchen Accessories": {
      "Premium": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 90000.0,
        "price": 90.0,
        "specification": "Provision up to 90000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 112500.0,
        "price": 112.5,
        "specification": "Provision up to 112500/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 135000.0,
        "price": 135.0,
        "specification": "Provision up to 135000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "Nos",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 225000.0,
        "price": 225.0,
        "specification": "Provision up to 225000/-.",
        "percentage_market": 0.001
      }
    }
  },
  "Final Touches and Cleanup": {
    "Detailing": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 3750.0,
        "price": 3.75,
        "specification": "Provision up to 3750/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9000.0,
        "price": 9.0,
        "specification": "Provision up to 9000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Polishing": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 4000.0,
        "price": 4.0,
        "specification": "Provision up to 4000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9000.0,
        "price": 9.0,
        "specification": "Provision up to 9000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Accessorising": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 5000.0,
        "price": 5.0,
        "specification": "Provision up to 5000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 9000.0,
        "price": 9.0,
        "specification": "Provision up to 9000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 12500.0,
        "price": 12.5,
        "specification": "Provision up to 12500/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 17500.0,
        "price": 17.5,
        "specification": "Provision up to 17500/-.",
        "percentage_market": 0.001
      }
    },
    "Cleaning": {
      "Premium": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 10000.0,
        "price": 10.0,
        "specification": "Provision up to 10000/-.",
        "percentage_market": 0.001
      },
      "Premium plus": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 14000.0,
        "price": 14.0,
        "specification": "Provision up to 14000/-.",
        "percentage_market": 0.001
      },
      "Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 19000.0,
        "price": 19.0,
        "specification": "Provision up to 19000/-.",
        "percentage_market": 0.001
      },
      "Ultra Luxury": {
        "unit": "LS",
        "total_sqft": 1.0,
        "quantity_multiplier": 0.001,
        "rate": 30000.0,
        "price": 30.0,
        "specification": "Provision up to 30000/-.",
        "percentage_market": 0.001
      }
    }
  }
};

const CategorySubcategoryStyleK = ({ onBack, onSubmit, onPrint, formData, onDelete, onSkip, carpetArea }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    { name: 'Structral Work', subcategories: ['RCC Work', 'Steel Framing Work', 'Pre Engineered Building Work'] },
    { name: 'Brick & Masonry Work', subcategories: ['Red Bricks', 'AAC Blocks', 'Concrete Blocks', 'Plaster Work', 'WaterProofing', 'Kitchen Platform Base (Masonry, Vertical Support, Tiling Etc.)'] },
    { name: 'Stone Work', subcategories: ['Tiles', 'Marble', 'Quartz', 'Granite'] },
    { name: 'Doors & Windows Installation', subcategories: ['Wooden', 'UPVC', 'Aluminium', 'Steel'] },
    { name: 'Plumbing Work', subcategories: ['PVC','CPVC','Sanitaryware Fittings','Fixtures','Concealed Parts','Labour/wct including Installations'] },
    { name: 'Flooring Solutions', subcategories: ['Tiles', 'Marble', 'Italian Marble', 'Granite','Kotah Stone','Kadappa Stone','Vinyl','Wooden','Skirting','Floor Polishing'] },
    { name: 'Electrical Work', subcategories: ['Distribution Board Work', 'DB Wiring', 'Light Points', '16Amp Plug Points', '6Amp Plug Points','USB-C & Conventional','CAT - 6'] },
    { name: 'Ceiling Work', subcategories: ['Gypsum/CFG Ceiling', 'Gypsum/CFG Ceiling+Wooden Ceiling', 'Gypsum/CFG Ceiling+Wooden Ceiling+Brass', 'POP Ceiling', 'Wooden Ceiling', 'Hilux (Calcium Silicate) Ceiling', 'Shera Plank And Melamine'] },
    { name: 'HVAC System', subcategories: ['Split AC', 'Central AC', 'Window AC', 'Ductless AC', 'Mini Split', 'Installation Charges'] },
    { name: 'Customization', subcategories: ['Custom Woodwork', 'Modular Furniture'] },
    { name: 'Paint and Wall Finishes', subcategories: ['Emulsion', 'Textured', 'Latex/Royal Aspira', 'Oil Based', 'Acrylic', 'POP Puning', 'Wall Paper'] },
    { name: 'Lighting Solutions', subcategories: ['Panel Lights', 'COB Lights', 'Surface Lights', 'Tube Lights', 'Fan', 'Exhaust Fan', 'Decorative Lights', 'Outdoor Lights'] },
    { name: 'Window Treatment', subcategories: ['Main Curtains', 'Main + Sheer Curtains', 'Blinds', 'Shades', 'Installation Charges'] },
    { name: 'Readymade Furniture', subcategories: ['Bench - 2 Seater Laminate Finish', 'Temple - Wooden With Glass Shutter', 'Swing - 1 Seater', 'Swing - 2 Seater', 'Swing - 3 Seater', 'Swing - 4 Seater - Wooden With Polish', 'Sofa - 3 Seater', 'Centre Table - Laminate Finish + Glass', 'Centre Table - Ducco Finish + Glass', 'Centre Table - Laminate + PU Finish + Glass', 'Centre Table -Veneer + PU Finish + Glass', 'Corner Table', 'Dining Table', 'Console Table', 'Bar Table', 'Bedside table', 'Coffee table', 'Computer table', 'Children\'s table', 'Conference & meeting table', 'Dressing table', 'Multifunctional table', 'Study table', 'Bar chair', 'Bar stool', 'Armchair', 'Wing chair', 'Dining chair', 'Junior dining chair', 'Foot stool (Ottoman)', 'Pouffe', 'Stools', 'Study Chair - Wooden', 'Study Chair - Revolving', 'Garden chair', 'Balcony Chair', 'Office Chair', 'Rocking Chair', 'Recliner Chair', 'Nursery furniture - Baby chairs & high chair', 'Gaming chair', 'Bed - Plain + Designer Laminate Finish', 'Bed - Laminate + Veneer Finish', 'Bed - Laminate + Ducco/Leather Finish', 'Bed - PU + Veneer + Fabric Finish', 'Dressing/Toilet Mirror - Plain', 'Dressing/Toilet Mirror - Plain/Led Touch Mirror', 'Dressing/Toilet Mirror - Plain//Led Touch/Decorative Mirror', 'Dressing/Toilet Mirror - Led Touch/Decorative Mirror', 'Wardrobes - Hinged(Openable) - Plain + Designer Laminate Finish', 'Wardrobes - Hinged(Openable) - Laminate + Veneer Finish', 'Wardrobes - Hinged(Openable) - Laminate + Ducco/Leather/Mirror Finish', 'Wardrobes - Hinged(Openable) - PU + Veneer + Fabric /Mirror Finish', 'Wardrobes - Hinged(Openable) - Aluminium Profile With Fluted/Tinted Glass', 'Wardrobes - Sliding - Plain + Designer Laminate Finish', 'Wardrobes - Sliding - Laminate + Veneer Finish', 'Wardrobes - Sliding - Laminate + Ducco/Leather/Mirror Finish', 'Wardrobes - Sliding - PU + Veneer + Fabric /Mirror Finish', 'Wardrobes - Sliding - Aluminium Profile With Fluted/Tinted Glass', 'Wardrobes - Wardrobes Loft - Plain + Designer Laminate Finish', 'Wardrobes - Wardrobes Loft - Laminate + Veneer Finish', 'Wardrobes - Wardrobes Loft - Laminate + Ducco/Leather/Mirror Finish', 'Wardrobes - Wardrobes Loft - PU + Veneer + Fabric /Mirror Finish'] },
    { name: 'Soft Furnishing', subcategories: ['Cushions', 'Rugs', 'Throws', 'Door Mat'] },
  { name: 'Artifacts and Accessories', subcategories: ['Paintings/Photo Frames', 'Stencil Work', 'Sculptures', 'Vases', 'Planters', 'Other Decorative', 'Kitchen Accessories'] },
  { name: 'Final Touches and Cleanup', subcategories: ['Detailing', 'Polishing', 'Accessorising', 'Cleaning'] },
];

  const planTypes = [
    { name: 'Premium', value: 'Premium' },
    { name: 'Premium plus', value: 'Premium plus' },
    { name: 'Luxury', value: 'Luxury' },
    { name: 'Ultra Luxury', value: 'Ultra Luxury' },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
    setSelectedPlanTypes([]);
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
    setSelectedPlanTypes([]);
  };

  const handlePlanTypeChange = (planTypeValue) => {
    if (selectedPlanTypes.includes(planTypeValue)) {
      setSelectedPlanTypes([]);
    } else {
      setSelectedPlanTypes([planTypeValue]);
    }
  };

  // const handleSubmit = () => {
  //   console.log("Selected Category:", selectedCategory);
  //   console.log("Selected Subcategory:", selectedSubcategory);
  //   console.log("Selected Plan Types:", selectedPlanTypes);

  //   const selectedPlanType = selectedPlanTypes[0]; // Assuming only one plan type is selected

  //   const pricingInfo = pricingData[selectedCategory]?.[selectedSubcategory]?.[selectedPlanType];

  //   if (!pricingInfo) {
  //     console.error('Pricing information not found for the selected options');
  //     return;
  //   }

  //   const selectedItem = {
  //     categories: selectedCategory,
  //     subcategories: selectedSubcategory,
  //     planTypes: selectedPlanTypes,
  //     percentageMarket: 1, // Hardcoded value
  //     unit: pricingInfo.unit,
  //     total_sqft: pricingInfo.total_sqft,
  //     quantity_multiplier: pricingInfo.quantity_multiplier,
  //     rate: pricingInfo.rate,
  //     price: pricingInfo.price,
  //     specification: pricingInfo.specification,
  //   };

  //   setFormSubmissions(prevSubmissions => [...prevSubmissions, selectedItem]);
  //   onSubmit(selectedItem);
  // };
  const handleSubmit = () => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Subcategory:", selectedSubcategory);
    console.log("Selected Plan Types:", selectedPlanTypes);

    const selectedPlanType = selectedPlanTypes[0]; // Assuming only one plan type is selected

    const pricingInfo = pricingData[selectedCategory]?.[selectedSubcategory]?.[selectedPlanType];

    if (!pricingInfo) {
      console.error('Pricing information not found for the selected options');
      return;
    }

    const rate = pricingInfo.rate;
    const quantity_multiplier = pricingInfo.quantity_multiplier;

    const price = carpetArea * rate * quantity_multiplier;

    const selectedItem = {
      categories: selectedCategory,
      subcategories: selectedSubcategory,
      planTypes: selectedPlanTypes,
      percentageMarket: pricingInfo.percentage_market,
      unit: pricingInfo.unit,
      total_sqft: carpetArea,
      quantity_multiplier: quantity_multiplier,
      rate: rate,
      price: price,
      specification: pricingInfo.specification,
    };

    setFormSubmissions(prevSubmissions => [...prevSubmissions, selectedItem]);
    onSubmit(selectedItem);
  };

  return (
    <div className="container mt-5">
      <CategorySubcategoryStyleKHeader />
      <Title />
      <div>
        <div className="row">
          <motion.div whileHover={{ scale: 1.07, marginRight: '20px' }} className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Categories</h3>
            <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
          </motion.div>
          <motion.div whileHover={{ scale: 1.07, marginLeft: '20px' }} className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Subcategories</h3>
            <select className="form-select" value={selectedSubcategory} onChange={handleSubcategoryChange}>
              <option value="">Select Subcategory</option>
              {selectedCategory &&
                categories.find((category) => category.name === selectedCategory)
                  .subcategories.map((subcategory, index) => (
                    <option key={index} value={subcategory}>{subcategory}</option>
                  ))}
            </select>
          </motion.div>
        </div>
        <div className="mt-3">
          <h3>Plan Types</h3>
          <motion.div whileHover={{ scale: 1.07 }} className="btn-group" role="group" aria-label="Plan Types">
            {planTypes.map((planType) => (
              <button
                key={planType.value}
                type="button"
                className={`btn btn-outline-primary ${selectedPlanTypes.includes(planType.value) ? 'active' : ''}`}
                onClick={() => handlePlanTypeChange(planType.value)}
              >
                {planType.name}
              </button>
            ))}
          </motion.div>
          <div style={{ width: '20px', height: '50px', marginLeft: '60px' }}>
            <button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              data-tooltip-id='tooltip'
              data-tooltip-content='Hey I can skip to Print-page!'
              data-tooltip-place='top'
              onClick={onSkip}
            >
              <motion.img
                style={{ width: '40px' }}
                src={arrow}
                alt='skip'
                animate={{ scale: [0.9, 1, 0.9], transition: { repeat: Infinity, duration: 2 } }}
              />
            </button>
            <Tooltip id="tooltip" />
          </div>
        </div>
        <div className="mt-3">
          <motion.button whileHover={{ scale: 1.06 }} className="btn btn-warning me-2" onClick={onBack}>Go Back</motion.button>
          <motion.button whileHover={{ scale: 1.06 }} className="btn btn-warning" onClick={handleSubmit}>Submit</motion.button>
          <motion.button whileHover={{ scale: 1.06 }} style={{ marginLeft: '10px' }} className="btn btn-warning" onClick={onDelete}>Delete</motion.button>
        </div>
      </div>
      <div className="text-center" style={{ marginTop: '30px' }}>
        <motion.button whileHover={{ scale: 1.12 }} className="btn btn-warning" onClick={onPrint}>Print All</motion.button>
      </div>
    </div>
  );
}

export default CategorySubcategoryStyleK;
