import React, { useState } from "react";

import Caramel from './Caramel';
import backs from "../image/backs.jpeg";




const DyesColors = () => {
  const [selectedCategory, setSelectedCategory] = useState("Disperse Dyes");

  const categories = [
    

    "Pharma Colors",
    "Pigments (Organic & Inorganic)",
    "Caramel colors",
    "Natural Colors",
    "Synthetic Food Colors",
    "lake/oil soluble",
    "Cosmetic Colors",
    "Home Care & Personal Care Colors",
    "Disperse Dyes",
    "Reactive Dyes",
    "Direct Dyes",
    "Acid Dyes",
    "Vat Dyes",
    "Solvent Dyes",
    "Basic Dyes",
  ];
  

  const dyeDetails = [
    {
      "category": "Pharma Colors",
      "description": "Pharma colors are specially formulated dyes and pigments used in the pharmaceutical industry for coloring tablets, capsules, syrups, and other medicinal products. These colors comply with stringent safety and regulatory standards.",
      "table": [
        { name: 'D & C Green 8', shade: '#90EE90', ci: '59040' },
        { name: 'Quinoline Yellow', shade: '#E6DA6A', ci: '47005' },
        { name: 'FD & C Yellow 5', shade: '#FFFF00', ci: '19140' },
        { name: 'D & C Yellow 10', shade: '#E3DA75', ci: '47005' },
        { name: 'D & C Yellow 8', shade: '#F0E68C', ci: '45350' },
        { name: 'FD & C Red 40', shade: '#E15D44', ci: '16035' },
        { name: 'FD & C Red 3', shade: '#F660AB', ci: '45430' },
        { name: 'D & C Red 22', shade: '#F01D7A', ci: '45380' },
        { name: 'D & C Red 28', shade: '#E238EC', ci: '45410' },
        { name: 'Carmoisine', shade: '#D70A53', ci: '14720' },
        { name: 'D & C Red 33', shade: '#B048B5', ci: '17200' },
        { name: 'Amaranth', shade: '#9F2B68', ci: '16185' },
        { name: 'D & C Green 5', shade: '#03C03C', ci: '61570' },
        { name: 'FD & C Red 4', shade: '#8E4585', ci: '14700' },
        { name: 'Patent Blue V', shade: '#007FFF', ci: '42051' },
        { name: 'FD & C Blue 2', shade: '#5072A7', ci: '73015' },
        { name: 'Black PN', shade: '#000000', ci: '28440' },
        { name: 'FD & C Green 3', shade: '#20BF55', ci: '42053' },
        { name: 'FD & C Blue 1', shade: '#0096FF', ci: '42090' },
        { name: 'FD &  C Yellow 6', shade: '#FF6600', ci: '15985' },
        { name: 'D & C Orange 4', shade: '#FF7F50', ci: '15510' },
        { name: 'Ponceau 4R', shade: '#F08080', ci: '16255' },
      ]
    },
    {
    category: "Pigments (Organic & Inorganic)",
    description:
      "Pigments are insoluble colorants that impart color to various materials. Organic pigments are carbon-based compounds offering vibrant colors, while inorganic pigments are derived from mineral sources, providing excellent durability and opacity. They are widely used in paints, coatings, plastics, and printing inks.",
    table: [
      {
        "name": "Pigment Alpha Blue 15:0",
        "shade": "#2980B9",
        "ci": "74160"
    },
    {
        "name": "Pigment Alpha Blue 15:1",
        "shade": "#3498DB",
        "ci": "74160:1"
    },
    {
        "name": "Pigment Beta Blue 15:3",
        "shade": "#5DADE2",
        "ci": "74160:3"
    },
    {
        "name": "Pigment Beta Blue 15:4",
        "shade": "#2E86C1",
        "ci": "74160:4"
    },
    {
        "name": "Pigment Green 7",
        "shade": "#1E8449",
        "ci": "74260"
    },
    {
        "name": "Pigment Green 8",
        "shade": "#229954",
        "ci": "10006"
    },
    {
        "name": "Pigment Yellow 1",
        "shade": "#F1C40F",
        "ci": "11680"
    },
    {
        "name": "Pigment Yellow 3",
        "shade": "#F4D03F",
        "ci": "11710"
    },
    {
        "name": "Pigment Yellow 12",
        "shade": "#F7DC6F",
        "ci": "21090"
    },
    {
        "name": "Pigment Yellow 13",
        "shade": "#F9E79F",
        "ci": "21100"
    },
    {
        "name": "Pigment Yellow 14",
        "shade": "#FCF3CF",
        "ci": "21095"
    },
    {
        "name": "Pigment Yellow 17",
        "shade": "#FFF9C4",
        "ci": "21105"
    },
    {
        "name": "Pigment Yellow 65",
        "shade": "#FFF59D",
        "ci": "11740"
    },
    {
        "name": "Pigment Yellow 74",
        "shade": "#FFF176",
        "ci": "11741"
    },
    {
        "name": "Pigment Yellow 83",
        "shade": "#FFEE58",
        "ci": "21108"
    },
    {
        "name": "Pigment Yellow 174",
        "shade": "#FFEB3B",
        "ci": "21098"
    },
    {
        "name": "Pigment Orange 5",
        "shade": "#FFB74D",
        "ci": "12075"
    },
    {
        "name": "Pigment Orange 13",
        "shade": "#FF8A65",
        "ci": "21100"
    },
    {
        "name": "Pigment Orange 34",
        "shade": "#FF7043",
        "ci": "21115"
    },
    {
        "name": "Pigment Red 2",
        "shade": "#E64A19",
        "ci": "12310"
    },
    {
        "name": "Pigment Red 3",
        "shade": "#D84315",
        "ci": "12120"
    },
    {
        "name": "Pigment Red 8",
        "shade": "#BF360C",
        "ci": "12335"
    },
    {
        "name": "Pigment Red 22",
        "shade": "#A62A2A",
        "ci": "12315"
    },
    {
        "name": "Pigment Red 23",
        "shade": "#8B0000",
        "ci": "12355"
    },
    {
        "name": "Pigment Red 48:1",
        "shade": "#DC143C",
        "ci": "15865:1"
    },
    {
        "name": "Pigment Red 48:2",
        "shade": "#C0392B",
        "ci": "15865:2"
    },
    {
        "name": "Pigment Red 48:3",
        "shade": "#E74C3C",
        "ci": "15865:3"
    },
    {
        "name": "Pigment Red 49:1",
        "shade": "#F39C12",
        "ci": "15630:1"
    },
    {
        "name": "Pigment Red 49:2",
        "shade": "#D35400",
        "ci": "15630:2"
    },
    {
        "name": "Pigment Red 53",
        "shade": "#E67E22",
        "ci": "15585"
    },
    {
        "name": "Pigment Red 53:1",
        "shade": "#E67E22",
        "ci": "15585:1"
    },
    {
        "name": "Pigment Red 57:1",
        "shade": "#D35400",
        "ci": "15850:1"
    },
    {
        "name": "Pigment Red 60:1",
        "shade": "#F39C12",
        "ci": "16105:1"
    },
    {
        "name": "Pigment Red 63:1",
        "shade": "#DC143C",
        "ci": "15880"
    },
    {
        "name": "Pigment Red 112",
        "shade": "#F06292",
        "ci": "12370"
    },
    {
        "name": "Pigment Red 146",
        "shade": "#EC407A",
        "ci": "12485"
    },
    {
        "name": "Pigment Red 170",
        "shade": "#AB47BC",
        "ci": "12475"
    },
    {
        "name": "Pigment Violet 23",
        "shade": "#9C27B0",
        "ci": "51319"
    },
]
  },

    {
      category: "Disperse Dyes",
      description:
        "Disperse Dyes are synthetic colorants primarily used for dyeing hydrophobic fibers such as polyester, acetate, and nylon. These dyes are finely ground and dispersed in water, as they do not dissolve completely. Disperse dyes are applied to fabrics through methods like high-temperature dyeing or heat transfer printing, ensuring even color penetration. They offer vibrant, deep colors with excellent colorfastness against washing, light, and rubbing. Ideal for textile applications, these dyes are widely used in the fashion and fabric industries.",
        "table": [
          {
              "name": "Yellow 3GE",
              "shade": "#FFDA63",
              "ci": "Yellow 54"
          },
          {
              "name": "Yellow 3G",
              "shade": "#FFDA63",
              "ci": "Yellow 64"
          },
          {
              "name": "Yellow C-5G",
              "shade": "#FFEC66",
              "ci": "Yellow 119"
          },
          {
              "name": "Yellow 4G",
              "shade": "#FFEC66",
              "ci": "Yellow 211"
          },
          {
              "name": "Yellow 5GL",
              "shade": "#FFDA63",
              "ci": "Yellow 241"
          },
          {
              "name": "Orange H3R",
              "shade": "#F39C12",
              "ci": "Orange 25"
          },
          {
              "name": "Orange 2RFS",
              "shade": "#E67E22",
              "ci": "Orange 30"
          },
          {
              "name": "Brown 3R",
              "shade": "#A04000",
              "ci": "Brown 1"
          },
          {
              "name": "Brown S-2BL",
              "shade": "#641E16",
              "ci": "Brown MIX"
          },
          {
              "name": "Scarlet S-3GFL",
              "shade": "#D35400",
              "ci": "Red 54"
          },
          {
              "name": "Blue 2B",
              "shade": "#4169E1",
              "ci": "Blue 165"
          },
          {
              "name": "Blue RSE",
              "shade": "#2E86C1",
              "ci": "Blue 183"
          },
          {
              "name": "Navy Blue EX-SF",
              "shade": "#000080",
              "ci": "Navy MIX"
          },
          {
              "name": "Red 2B",
              "shade": "#8E44AD",
              "ci": "Red 60"
          },
          {
              "name": "Rubine FL",
              "shade": "#9B59B6",
              "ci": "Rubine 73"
          },
          {
              "name": "Scarlet BS",
              "shade": "#E74C3C",
              "ci": "Red 152"
          },
          {
              "name": "Scarlet GS",
              "shade": "#E74C3C",
              "ci": "Red 153"
          },
          {
              "name": "Red 3BL",
              "shade": "#E74C3C",
              "ci": "Red 167"
          },
          {
              "name": "Red F3BS",
              "shade": "#E74C3C",
              "ci": "Red 343"
          },
          {
              "name": "Red Violet FBL",
              "shade": "#8E44AD",
              "ci": "Violet 26"
          },
          {
              "name": "Blue R",
              "shade": "#4169E1",
              "ci": "Blue 56"
          },
          {
              "name": "Turq. Blue SGL",
              "shade": "#4169E1",
              "ci": "Blue 60"
          },
          {
              "name": "Navy Blue E/C",
              "shade": "#000080",
              "ci": "Blue 79"
          },
          {
              "name": "Navy Blue EXN-SF",
              "shade": "#000080",
              "ci": "Navy MIX"
          },
          {
              "name": "Black EX-SF",
              "shade": "#212F3D",
              "ci": "Black MIX"
          },
          {
              "name": "Black EXN-SF",
              "shade": "#212F3D",
              "ci": "Black MIX"
          },
      ]
    },
    {
      category: "Reactive Dyes",
      description:
        "Reactive Dyes are widely used for dyeing cellulose fibers such as cotton and rayon. These dyes form covalent bonds with fibers, ensuring excellent wash fastness and vibrant colors. They are ideal for textile applications requiring durability and brilliance.",
      "table": [
    {
     
      "name": "Reactive Yellow 7",
      "shade": "#FFA500"
    },
    {
    
      "name": "Reactive Orange 14",
      "shade": "#D2691E"
    },
    {
      
      "name": "Reactive Yellow 22",
      "shade": "#FFFF00"
    },
    {
      
      "name": "Reactive Yellow 36",
      "shade": "#FFA07A"
    },
    {
      
      "name": "Reactive Yellow 44",
      "shade": "#FF8C00"
    },
    {
     
      "name": "Reactive Yellow 44",
      "shade": "#FFA500"
    },
    {
      
      "name": "Reactive Yellow 86",
      "shade": "#F0E68C"
    },
    {
      "name": "Reactive Orange M2RJ",
      "shade": "#DC143C"
    },
    {
      
      "name": "Reactive Orange 4",
      "shade": "#FF4500"
    },
    {
      
      "name": "Reactive Red 2",
      "shade": "#C71585"
    },
    {
     
      "name": "Reactive Red 11",
      "shade": "#800000"
    },
    {
        
        "name": "Reactive Violet 12",
        "shade": "#483D8B"
      },
      {
       
        "name": "Reactive Violet 13",
        "shade": "#8B008B"
      },
      {
       
        "name": "Reactive Violet 14",
        "shade": "#000080"
      },
      {
        
        "name": "Reactive Blue 4",
        "shade": "#0000CD"
      },
      {
       
        "name": "Reactive Blue 9",
        "shade": "#00008B"
      },
      {
        
        "name": "Reactive Blue 71",
        "shade": "#00BFFF"
      },
      {
       
        "name": "Reactive Blue 81",
        "shade": "#000080"
      },
      {
       
        "name": "Reactive Blue 81",
        "shade": "#000080"
      },
      {
      
        "name": "Reactive Blue 140",
        "shade": "#00FFFF"
      },
      {
        "name": "Reactive Blue 168",
        "shade": "#00008B"
      },
      { "name": "Reactive Yellow 160 / 4GL","shade": "#FFFF00" },
      {  "name": "Reactive Yellow 186 / ME4G ","shade": "#FFA500" },
      {  "name": "Reactive Yellow 145 MERL" , "shade": "#FFD700"},
      {  "name": "Reactive Orange 122 / M2RL" ,"shade": "#FFA07A"},
      {  "name": "Reactive Red 194 / ME3BL" ,"shade": "#FF4500"},
      {  "name": "Reactive Red 195 / ME4BL","shade": "#FF6347"},
      {  "name": "Reactive Red 196 / ME6BL" ,"shade": "#FF0000"},
      {  "name": "Reactive Red 223 / ME3GL","shade": "#DC143C"},
      {  "name": "Reactive Red 222 / MES2G","shade": "#B22222"},
      {  "name": "Reactive Blue 194 / ME2GL","shade": "#0000FF" },
      {  "name": "Reactive Blue 222 / BF" , "shade": "#1E90FF"},
      {  "name": "Reactive Blue 248 / ME2RL" ,"shade": "#4682B4" },
      { "name": "Reactive Yellow 15 / GR", "shade": "#FFFF00" },
      { "name": "Reactive Yellow 37 / GL", "shade": "#FFD700" },
      { "name": "Reactive Yellow 42 / FG", "shade": "#FFCC00" },
      { "name": "Reactive Yellow 107 / RNL", "shade": "#FFDD44" },
      { "name": "Reactive Orange 16 / 3R", "shade": "#FFA500" },
      { "name": "Reactive Orange 60", "shade": "#FF8C00" },
      { "name": "Reactive Orange 72 / GR", "shade": "#FF7F50" },
      { "name": "Reactive Red 21 / BB", "shade": "#FF1493" },
      { "name": "Reactive Red 35 / 5B", "shade": "#FF69B4" },
      { "name": "Reactive Red 106 / C2G", "shade": "#DC143C" },
      { "name": "Reactive Red 111 / BS", "shade": "#B22222" },
      { "name": "Reactive Red 278 / CD", "shade": "#8B0000" },
      { "name": "Reactive Violet 5 / 5R", "shade": "#9400D3" },
      { "name": "Reactive Blue 220 / BB", "shade": "#0000FF" },
      { "name": "Reactive Brown 18 / GR", "shade": "#A52A2A" },
      { "name": "Reactive Blue H2GP", "shade": "#1E90FF" },
      { "name": "Reactive Black 5 / B", "shade": "#00008B" },
      { "name": "Reactive Black WNN", "shade": "#2F4F4F" },
      { "name": "Reactive Black N150", "shade": "#696969" },
      { "name": "Reactive Black HFGR", "shade": "#000000" },
      { "name": "Reactive Black 31 / RL", "shade": "#101010" },
      { "name": "Reactive Yellow 105 / HE4G", "shade": "#FFFF00" },
      { "name": "Reactive Yellow 135 / HE6G", "shade": "#FFD700" },
      { "name": "Reactive Yellow 84 / HER", "shade": "#FFA500" },
      { "name": "Reactive Orange 84 / HER", "shade": "#FF4500" },
      { "name": "Reactive Red 120 / HE3B", "shade": "#FF1493" },
      { "name": "Reactive Red 141 / HE7B", "shade": "#FF69B4" },
      { "name": "Reactive Red 152 / HE8B", "shade": "#DC143C" },
      { "name": "Reactive Blue 171 / HER", "shade": "#00008B" },
      { "name": "Reactive Blue 172 / HE2R", "shade": "#1E90FF" },
      { "name": "Reactive Blue 160 / HERD", "shade": "#4682B4" },
      { "name": "Reactive Blue 198 / HEGN", "shade": "#0000FF" },
      { "name": "Reactive Green 19 / HE4BD", "shade": "#008080" },
      { "name": "Reactive Yellow 2 / H5G", "shade": "#FFFF00" },
      { "name": "Reactive Yellow 18 / H4G", "shade": "#FFD700" },
      { "name": "Reactive Yellow 57 / H7GL", "shade": "#FFCC00" },
      { "name": "Reactive Yellow 85 / H8G",  "shade": "#FFDD44" },
      { "name": "Reactive Yellow 95 / P6GS", "shade": "#FFA500" },
      { "name": "Reactive Yellow 185 / H7GL", "shade": "#FFD700" },
      { "name": "Reactive Orange 12 / HR", "shade": "#FF8C00" },
      { "name": "Reactive Orange 13 / H2R", "shade": "#FF7F50" },
      { "name": "Reactive Red 3.1 / P4BN",  "shade": "#FF1493" },
      { "name": "Reactive Red 24 / PB",  "shade": "#FF69B4" },
      { "name": "Reactive Red 31 / H8B",  "shade": "#DC143C" },
      { "name": "Reactive Red 45 / P3B", "shade": "#B22222" },
      { "name": "Reactive Red 76 / 6B",  "shade": "#8B0000" },
      { "name": "Reactive Red 218 / P6B",  "shade": "#9400D3" },
      { "name": "Reactive Red 245 / P4B", "shade": "#FF69B4" },
      { "name": "Reactive Violet 13 / Magenta HB", "shade": "#9400D3" },
      { "name": "Reactive Brown 11 / P6RI", "shade": "#A52A2A" },
      { "name": "Reactive Blue 25 / H5G", "shade": "#1E90FF" },
      { "name": "Reactive Blue 72 / P4G", "shade": "#4682B4" },
      { "name": "Reactive Blue 59 / N Blue RX", "shade": "#0000FF" },
      { "name": "Reactive Black 8 / HN", "shade": "#00008B" },
      { "name": "Reactive Black 39 / P2R", "shade": "#101010" },
      { "name": "Reactive Yellow 95 / P6GS", "shade": "#FFFF00" },
      { "name": "Reactive Red 24 / PB", "shade": "#FF1493" },
      { "name": "Reactive Orange 72 / GR", "shade": "#FF8C00" },
      { "name": "Reactive Black N150", "shade": "#000000" },
  ]
    },

    {
      category: "Direct Dyes",
      description:
        "Direct Dyes are water-soluble dyes that are applied directly to cellulose fibers such as cotton without requiring a mordant. They provide bright shades but have moderate wash fastness.",
      table: [
        {
            "name": "Brilliant Yellow 3 GX",
            "shade": "#F0E68C",
            "ci": "Direct Yellow 6"
        },
        {
            "name": "Yellow CFG H/C",
            "shade": "#FAFAD2",
            "ci": "Direct Yellow 8"
        },
        {
            "name": "Paper Yellow T",
            "shade": "#EEE8AA",
            "ci": "Direct Yellow 11"
        },
        {
            "name": "Crysophenine GCH H/C [Heavy]",
            "shade": "#F5DEB3",
            "ci": "Direct Yellow 12"
        },
        {
            "name": "Yellow G",
            "shade": "#FFFFE0",
            "ci": "Direct Yellow 28"
        },
        {
            "name": "Yellow R",
            "shade": "#F0E68C",
            "ci": "Direct Yellow 29"
        },
        {
            "name": "Yellow 5GLL",
            "shade": "#FFFF00",
            "ci": "Direct Yellow 44"
        },
        {
            "name": "Supra Yellow RL",
            "shade": "#FFA500",
            "ci": "Direct Yellow 86"
        },
        {
            "name": "Sun Yellow RCH",
            "shade": "#D2691E",
            "ci": "Direct Yellow 99"
        },
        {
            "name": "Orange SE",
            "shade": "#FF8C00",
            "ci": "Direct Orange 26"
        },
        {
            "name": "Orange GL",
            "shade": "#E67E22",
            "ci": "Direct Orange 34"
        },
        {
            "name": "Orange 7GLL",
            "shade": "#FF7F50",
            "ci": "Direct Orange 37"
        },
        {
            "name": "Orange TGLL",
            "shade": "#F4A460",
            "ci": "Direct Orange 39"
        },
        {
            "name": "Orange WS",
            "shade": "#CD5C5C",
            "ci": "Direct Orange 102"
        },
        {
            "name": "Vircose Orange A",
            "shade": "#DC143C",
            "ci": "Direct Orange 108"
        },
        {
          "name": "Bordeaux 6B (EXP.STD.)",
          "shade": "#800000",
          "ci": "Direct Red 16"
      },
      {
          "name": "Fast Scarlet 4BS",
          "shade": "#FF0000",
          "ci": "Direct Red 23"
      },
      {
          "name": "Red 12B",
          "shade": "#C71585",
          "ci": "Direct Red 31"
      },
      {
          "name": "Red 5BR",
          "shade": "#FF69B4",
          "ci": "Direct Red 80"
      },
      {
          "name": "Red 5BL",
          "shade": "#B22222",
          "ci": "Direct Red 81"
      },
      {
          "name": "Red 2BL",
          "shade": "#E91E63",
          "ci": "Direct Red 83"
      },
      {
          "name": "Brown 3R 133%",
          "shade": "#8B4513",
          "ci": "Direct Red 111"
      },
      {
          "name": "Light Rose FR",
          "shade": "#F08080",
          "ci": "Direct Red 227"
      },
      {
          "name": "Scarlet 6BS",
          "shade": "#FF4500",
          "ci": "Direct Red 239"
      },
      {
          "name": "Pink 3B (SF)",
          "shade": "#D064B8",
          "ci": "Direct Red 254"
      },
      {
          "name": "Violet MB",
          "shade": "#9400D3",
          "ci": "Direct Violet 9"
      },
      {
          "name": "Violet BB",
          "shade": "#9932CC",
          "ci": "Direct Violet 35"
      },
      {
          "name": "Helio B",
          "shade": "#8A2BE2",
          "ci": "Direct Violet 51"
      },
      {
          "name": "Sky Blue FB",
          "shade": "#87CEEB",
          "ci": "Direct Blue 1"
      },
      {
          "name": "Sky Blue FF",
          "shade": "#4682B4",
          "ci": "Direct Blue 15"
      },
      {
          "name": "Blue 3RL",
          "shade": "#0000CD",
          "ci": "Direct Blue 67"
      },
      {
          "name": "Blue GLL",
          "shade": "#00008B",
          "ci": "Direct Blue 71"
      },
      {
          "name": "Blue RLL",
          "shade": "#4169E1",
          "ci": "Direct Blue 80"
      },
      {
          "name": "T. Blue SBL",
          "shade": "#ADD8E6",
          "ci": "Direct Blue 86"
      },
      {
          "name": "Brilliant Blue BL",
          "shade": "#00BFFF",
          "ci": "Direct Blue 106"
      },
      {
          "name": "Turq. Blue FBL",
          "shade": "#00CED1",
          "ci": "Direct Blue 199"
      },
      {
          "name": "Blue GRL",
          "shade": "#483D8B",
          "ci": "Direct Blue 200"
      },
      {
          "name": "Blue 2R",
          "shade": "#5F9EA0",
          "ci": "Direct Blue 290"
      },
      {
          "name": "Grey D",
          "shade": "#778899",
          "ci": "Direct Black 17"
      },
      {
          "name": "Black VB (SF)",
          "shade": "#000000",
          "ci": "Direct Black 19"
      },
      {
          "name": "Black NBL",
          "shade": "#2F4F4F",
          "ci": "Direct Black 22"
      },
       {
          "name": "Grey RLN",
          "shade": "#696969",
          "ci": "Direct Black 56"
      },
      {
          "name": "Black OB",
          "shade": "#000000",
          "ci": "Direct Black 80"
      },
      {
          "name": "Black B7",
          "shade": "#191970",
          "ci": "Direct Black 155"
      },
      {
          "name": "Black AR",
          "shade": "#000000",
          "ci": "Direct Black 168"
      },
      {
          "name": "Green BL",
          "shade": "#006400",
          "ci": "Direct Green 26"
      },
      {
          "name": "Green NB",
          "shade": "#2E8B57",
          "ci": "Direct Green 114"
      },
      {
          "name": "Brown GTL",
          "shade": "#A0522D",
          "ci": "Direct Brown 210"
      },
      ],
    },

    {
    category: "Acid Dyes",
    description: "Acid dyes are water-soluble anionic dyes that are applied to fibers such as silk, wool, nylon, and modified acrylic fibers using acidic conditions. They are widely used in the textile, leather, and paper industries.",
    table: [
      {
        "name": "Yellow 2GL",
        "shade": "#F0E68C",
        "ci": "Acid Yellow 17"
    },
    {
        "name": "Tartrazine Y",
        "shade": "#E3DA75",
        "ci": "Acid Yellow 23"
    },
    {
        "name": "Metanil Yellow R",
        "shade": "#E3DA75",
        "ci": "Acid Yellow 36"
    },
    {
        "name": "Yellow FG",
        "shade": "#FFFF00",
        "ci": "Acid Yellow 42"
    },
    {
        "name": "Yellow 5GN",
        "shade": "#F0E68C",
        "ci": "Acid Yellow 110"
    },
    {
        "name": "Yellow 2GL",
        "shade": "#D2B48C",
        "ci": "Acid Yellow 151"
    },
    {
        "name": "Yellow M5RL",
        "shade": "#CD853F",
        "ci": "Acid Yellow 204"
    },
    {
        "name": "Orange GTL",
        "shade": "#FF8C00",
        "ci": "Acid Orange 3"
    },
    {
        "name": "Orange II",
        "shade": "#E67E22",
        "ci": "Acid Orange 7"
    },
    {
        "name": "Orange 2GL",
        "shade": "#FF7F50",
        "ci": "Acid Orange 10"
    },
    {
        "name": "Orange 3GL",
        "shade": "#F4A460",
        "ci": "Acid Orange 56"
    },
    {
        "name": "Orange G",
        "shade": "#E9967A",
        "ci": "Acid Orange 74"
    },
    {
        "name": "Orange RL",
        "shade": "#CD5C5C",
        "ci": "Acid Orange 86"
    },
    {
        "name": "Orange 2G",
        "shade": "#F08080",
        "ci": "Acid Orange 116"
    },
    {
        "name": "Orange MRL",
        "shade": "#A0522D",
        "ci": "Acid Orange 142"
    },
    {
        "name": "Red 2GN",
        "shade": "#DC143C",
        "ci": "Acid Red 1"
    },
    {
        "name": "Crysta Red A",
        "shade": "#B22222",
        "ci": "Acid Red 14"
    },
    {
        "name": "Scarlet 3R",
        "shade": "#E9967A",
        "ci": "Acid Red 18"
    },
    {
        "name": "Rhodamine B H/conc.",
        "shade": "#F660AB",
        "ci": "Acid Red 52"
    },
    {
        "name": "Scarlet MOO",
        "shade": "#F01D7A",
        "ci": "Acid Red 73"
    },
     {
        "name": "Fast Red A",
        "shade": "#E238EC",
        "ci": "Acid Red 88"
    },
    {
        "name": "Red B2G",
        "shade": "#D70A53",
        "ci": "Acid Red 97"
    },
     {
        "name": "Red 106",
        "shade": "#B048B5",
        "ci": "Acid Red 106"
    },
    {
      "name": "RED RS",
      "shade": "#D72638",
      "ci": "ACID RED 114"
  },
  {
      "name": "MAROON V 150%",
      "shade": "#8E236B",
      "ci": "ACID RED 119"
  },
  {
      "name": "RED 3RB",
      "shade": "#D72638",
      "ci": "ACID RED 128"
  },
  {
      "name": "RED 3BN",
      "shade": "#F778A1",
      "ci": "ACID RED 131"
  },
  {
      "name": "RED FR",
      "shade": "#F08080",
      "ci": "ACID RED 151"
  },
  {
      "name": "RED M2BN",
      "shade": "#D04848",
      "ci": "ACID RED 249"
  },
  {
      "name": "RED M3R",
      "shade": "#B43889",
      "ci": "ACID RED 362"
  },
  {
      "name": "GERANINE 6B",
      "shade": "#800080",
      "ci": "ACID VIOLET 7"
  },
  {
      "name": "VIOLET 4BN",
      "shade": "#6A5ACD",
      "ci": "ACID VIOLET 17"
  },
  {
      "name": "VIOLET 4SB",
      "shade": "#663399",
      "ci": "ACID VIOLET 49"
  },
  {
      "name": "RED 10B",
      "shade": "#800080",
      "ci": "ACID VIOLET 54"
  },
  {
      "name": "VIOLET MBL",
      "shade": "#7B68EE",
      "ci": "ACID VIOLET 92"
  },
  {
      "name": "MAROON V",
      "shade": "#483D8B",
      "ci": "ACID VIOLET 119"
  },
  {
      "name": "PATENT BLUE VS",
      "shade": "#008080",
      "ci": "ACID BLUE 1"
  },
  {
      "name": "NAVY BLUE M3R",
      "shade": "#000080",
      "ci": "ACID BLUE 9"
  },
  {
      "name": "BLUE AG / CRUDE",
      "shade": "#000080",
      "ci": "ACID BLUE 25"
  },
  {
      "name": "BLUE 2G",
      "shade": "#008B8B",
      "ci": "ACID BLUE 40"
  },
  {
      "name": "CYANINE BLUE 5R",
      "shade": "#2F4F4F",
      "ci": "ACID BLUE 113"
  },
  {
      "name": "GREEN PXE",
      "shade": "#2E8B57",
      "ci": "ACID GREEN 1"
  },
  {
      "name": "GREEN V 333 %",
      "shade": "#3CB371",
      "ci": "ACID GREEN 16"
  },
  {
      "name": "GREEN N",
      "shade": "#006400",
      "ci": "ACID GREEN 20"
  },
  {
      "name": "DARK GREEN N",
      "shade": "#006400",
      "ci": "ACID GREEN 68.1"
  },
  {
      "name": "OLIVE MBGL",
      "shade": "#556B2F",
      "ci": "ACID GREEN 104"
  },
  {
      "name": "OLIVE LSB",
      "shade": "#556B2F",
      "ci": "ACID GREEN 111"
  },
  {
      "name": "BROWN RD",
      "shade": "#708090",
      "ci": "ACID BROWN 14"
  },
  {
      "name": "BROWN 5",
      "shade": "#8B4513",
      "ci": "ACID BROWN 67"
  },
  {
      "name": "BROWN NR",
      "shade": "#A0522D",
      "ci": "ACID BROWN 75"
  },
  {
      "name": "BROWN 6GG",
      "shade": "#A52A2A",
      "ci": "ACID BROWN 83"
  },
  {
      "name": "BROWN MFR",
      "shade": "#8B4513",
      "ci": "ACID BROWN 97"
  },
  {
      "name": "BROWN HEDG",
      "shade": "#6B8E23",
      "ci": "ACID BROWN 100"
  },
  {
      "name": "BROWN SLR",
      "shade": "#556B2F",
      "ci": "ACID BROWN 106"
  },
  {
      "name": "BROWN H",
      "shade": "#808000",
      "ci": "ACID BROWN 121"
  },
  {
      "name": "BROWN GB",
      "shade": "#F5F5DC",
      "ci": "ACID BROWN 161"
  },
  {
      "name": "BROWN NT",
      "shade": "#D2B48C",
      "ci": "ACID BROWN 165"
  },
  {
      "name": "BROWN RD",
      "shade": "#808000",
      "ci": "ACID BROWN 191"
  },
  {
      "name": "BROWN SGR",
      "shade": "#8B4513",
      "ci": "ACID BROWN 282"
  },
  {
      "name": "BROWN 5R",
      "shade": "#8B4513",
      "ci": "ACID BROWN 348"
  },
  {
      "name": "BROWN 5G",
      "shade": "#8B4513",
      "ci": "ACID BROWN 349"
  },
  {
      "name": "BROWN GS",
      "shade": "#8B4513",
      "ci": "ACID BROWN 425"
  },
  {
      "name": "BROWN MX",
      "shade": "#696969",
      "ci": "ACID BROWN 432"
  },
  {
      "name": "BLACK 10BX",
      "shade": "#000000",
      "ci": "ACID BLACK 1"
  },
  {
      "name": "NIGROSINE BLACK CRYSTAL",
      "shade": "#000000",
      "ci": "ACID BLACK 2"
  },
  {
      "name": "BLACK BR",
      "shade": "#000000",
      "ci": "ACID BLACK 24"
  },
  {
      "name": "BLACK 58",
      "shade": "#000000",
      "ci": "ACID BLACK 58"
  },
  {
      "name": "BLACK NTR",
      "shade": "#2F4F4F",
      "ci": "ACID BLACK 210"
  },
  {
      "name": "BLACK NB",
      "shade": "#2F4F4F",
      "ci": "ACID BLACK 234"
  },
  {
      "name": "BLACK FB",
      "shade": "#2F4F4F",
      "ci": "ACID BLACK 235"
  },
    ],
  },
  
  {
    category: "Vat Dyes",
    description:
      "Vat dyes are water-insoluble dyes that are reduced to their soluble leuco form using a reducing agent under alkaline conditions. They are widely used for dyeing cellulose fibers like cotton due to their excellent fastness properties.",
    table: [
      {
        "name": "Vat Violet 1",
        "shade": "#800080",
        "ci": "60010"
      },
      {
        "name": "Vat Violet 9",
        "shade": "#FF69B4",
        "ci": "60005"
      },
      {
        "name": "Vat Violet 13",
        "shade": "#C71585",
        "ci": "73395"
      },
      {
        "name": "Vat Blue 4",
        "shade": "#008080",
        "ci": null
      },
      {
        "name": "Vat Blue 6",
        "shade": "#00CED1",
        "ci": null
      },
      {
        "name": "Vat Blue 6",
        "shade": "#4682B4",
        "ci": "69825"
      },
      {
        "name": "Vat Blue 18",
        "shade": "#191970",
        "ci": "59815"
      },
      {
        "name": "Vat Blue 20",
        "shade": "#000080",
        "ci": "59800"
      },
      {
        "name": "Vat Green 1",
        "shade": "#2E8B57",
        "ci": "59825"
      },
      {
        "name": "Vat Green 1",
        "shade": "#00CED1",
        "ci": null
      },
      {
        "name": "Vat Green 1",
        "shade": "#4682B4",
        "ci": "59825"
      },
      {
        "name": "Vat Green 1",
        "shade": "#2E8B57",
        "ci": "59825"
      },
      {
        "name": "Vat Green 2",
        "shade": "#006400",
        "ci": "59830"
      },
      {
        "name": "Vat Green 2",
        "shade": "#006400",
        "ci": "59830"
      },
       {
        "name": "Vat Green 2",
        "shade": "#00CED1",
        "ci": null
      },
      {
        "name": "Vat Green 3",
        "shade": "#008000",
        "ci": "69500"
      },
      {
        "name": "Vat Green 3",
        "shade": "#98FF98",
        "ci": null,
       
      },
      {
        "name": "Vat Green 9",
        "shade": "#8B0000",
        "ci": "59850",
       
      },
      {
        "name": "Vat Green 29",
        "shade": "#556B2F",
        "ci": null,
      
      },
      {
        "name": "VAT BLACK 16",
        "shade": "#000000",
        "ci": "59855",
       
      },
      {
        "name": "VAT BLACK 22",
        "shade": "#4682B4",
        "ci": null,
      
      },
      {
        "name": "Vat Black 25",
        "shade": "#708090",
        "ci": "69525",
    
      },
      {
        "name": "Vat Black 27",
        "shade": "#808080",
        "ci": "69005",
        
      },
      {
        "name": "Vat Black 38",
        "shade": "#2F4F4F",
        "ci": null,
        
      },
      {
        "name": "Vat Black 65",
        "shade": "#000000",
        "ci": null,
       
      },
      {
        "name": "Vat Brown 1",
        "shade": "#CD853F",
        "ci": null,
        
      },
      {
        "name": "Vat Brown 3",
        "shade": "#D2691E",
        "ci": null,
        
      },
      {
        "name": "Vat Brown 33",
        "shade": "#8B4513",
        "ci": null,
       
      },
      {
        "name": "Vat Brown 57",
        "shade": "#A0522D",
        "ci": null,
       
      },
    ],
  },

  
  {
    category: "Solvent Dyes",
    description:
      "Solvent dyes are non-polar dyes that are soluble in organic solvents. They are commonly used for coloring plastics, waxes, fuels, and other hydrocarbon-based materials.",
    table: [
      {
        "name": "Solvent Yellow 33 (D&C Yellow 11)",
        "shade": "#F0E68C",
        "ci": "47000"
    },
    {
        "name": "Solvent Yellow 43",
        "shade": "#9ACD32",
        "ci": "561930"
    },
    {
        "name": "Solvent Yellow 62",
        "shade": "#FFFF00",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 82",
        "shade": "#DAA520",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 90",
        "shade": "#CD853F",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 93",
        "shade": "#FFFF00",
        "ci": "48160"
    },
    {
        "name": "Solvent Yellow 114 (Disperse Yellow 54)",
        "shade": "#B8860B",
        "ci": "47020"
    },
    {
        "name": "Solvent Yellow 145 (Disperse Yellow 82)",
        "shade": "#D2691E",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 146",
        "shade": "#8B4513",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 157",
        "shade": "#90EE90",
        "ci": "470180"
    },
    {
        "name": "Solvent Yellow 160:1 (Disperse Yellow 184:1,232)",
        "shade": "#ADFF2F",
        "ci": ""
    },
    {
        "name": "Solvent Yellow 163",
        "shade": "#FFFF00",
        "ci": "58840"
    },
    {
      "name": "Solvent Yellow 172 (Solvent Yellow 135)",
      "shade": "#FFFF00",
      "ci": ""
  },
  {
      "name": "Solvent Blue 4 (Victoria Blue Base)",
      "shade": "#87CEEB",
      "ci": "440451"
  },
  {
      "name": "Solvent Blue 35",
      "shade": "#000080",
      "ci": "61554"
  },
  {
      "name": "Solvent Blue 36",
      "shade": "#6A5ACD",
      "ci": "61551"
  },
  {
      "name": "Solvent Blue 38",
      "shade": "#00008B",
      "ci": "74180"
  },
  {
      "name": "Solvent Blue 43",
      "shade": "#000080",
      "ci": ""
  },
  {
      "name": "Solvent Blue 45",
      "shade": "#00008B",
      "ci": ""
  },
  {
      "name": "Solvent Blue 48",
      "shade": "#4682B4",
      "ci": ""
  },
  {
      "name": "Solvent Blue 58",
      "shade": "#000080",
      "ci": "615555"
  },
  {
      "name": "Solvent Blue 67",
      "shade": "#4682B4",
      "ci": ""
  },
  {
      "name": "Solvent Blue 70",
      "shade": "#87CEEB",
      "ci": ""
  },
  {
      "name": "Solvent Blue 78 (Disperse Blue 14)",
      "shade": "#000080",
      "ci": "61500"
  },
  {
      "name": "Solvent Blue 101",
      "shade": "#6A5ACD",
      "ci": "615670"
  },
  {
    "name": "Solvent Red 207",
    "shade": "#FF0000",
    "ci": "6701"
},
{
    "name": "Solvent Green 7 (D&C Green 8)",
    "shade": "#008080",
    "ci": "61565"
},
{
    "name": "Solvent Blue 78 (Disperse Blue 14)",
    "shade": "#00008B",
    "ci": "61500"
},
]
  },

  {
    category: "Basic Dyes",
    description:
      "Basic dyes are water-soluble cationic dyes that are primarily used for dyeing acrylic fibers but can also be used on wool and silk. They provide bright and vibrant shades with good affinity to negatively charged surfaces.",
    table: [
      {
        "name": "Basic Blue 140",
        "shade": "#ADD8E6",
        "ci": "743516"
    },
    {
        "name": "Basic Violet 1",
        "shade": "#8A2BE2",
        "ci": "42535"
    },
    {
        "name": "Basic Violet 10",
        "shade": "#FF69B4",
        "ci": "45170"
    },
    {
        "name": "Basic Violet 14",
        "shade": "#800000",
        "ci": "42555"
    },
    {
        "name": "Basic Orange 2",
        "shade": "#FF8C00",
        "ci": "44045"
    },
    {
        "name": "Basic Orange 22",
        "shade": "#FF4500",
        "ci": "48040"
    },
    {
        "name": "Basic Red 18:1",
        "shade": "#CD5C5C",
        "ci": null
    },
    {
        "name": "Basic Yellow 2",
        "shade": "#FFFF00",
        "ci": "42600"
    },
    {
        "name": "Basic Brown 1",
        "shade": "#A0522D",
        "ci": "21000"
    },
    ],
  },
  
  {
    category: "Caramel colors",
    description:
      "",
    table: [
      
    ],
  },
  {
    category: "Natural Colors",
    description:
      "Natural colors are derived from plant, animal, or mineral sources and are used as safe and eco-friendly alternatives to synthetic dyes. These colors are widely used in food, cosmetics, textiles, and pharmaceuticals.",
    table: [
        {
            "name": "Caramel Type I Plain Scotch Grade",
            "shade": "#8B4513",
            "ci": "E-150a"
        },
        {
            "name": "Caramel Type II Caustic Sulphate Grade",
            "shade": "#A0522D",
            "ci": "E-150b"
        },
        {
            "name": "Caramel Type III Beer Grade",
            "shade": "#CD853F",
            "ci": "E-150c"
        },
        {
            "name": "Caramel Type IV Single Strength",
            "shade": "#D2691E",
            "ci": "E-150d"
        },
        {
            "name": "Caramel Type IV Double Strength",
            "shade": "#800000",
            "ci": "E-150d"
        },
        {
            "name": "Caramel Powder",
            "shade": "#A52A2A",
            "ci": "E-150"
        },
        {
            "name": "Annatto Oil Soluble 1.5% Bixin",
            "shade": "#FF7F50",
            "ci": "E-160b"
        },
        {
            "name": "Annatto Water Soluble 1.5% Nor-Bixin",
            "shade": "#FFA07A",
            "ci": "E-160b"
        },
        {
            "name": "Curcumine Color",
            "shade": "#FFD700",
            "ci": "E-100"
        },
        {
            "name": "Red Beet Root Powder 0.3% to 0.45% Betanine",
            "shade": "#DC143C",
            "ci": "E-162"
        },
        {
            "name": "Paprika Colour Water Soluble 40,000 I.U",
            "shade": "#FF4500",
            "ci": "E-160c"
        },
        {
            "name": "Paprika Colour Water Soluble 40,000 I.U (Powder)",
            "shade": "#FF6347",
            "ci": "E-160c"
        },
        {
            "name": "Chlorophyll Green",
            "shade": "#556B2F",
            "ci": "E-141"
        },
        {
            "name": "Carmine 45%, 50% & 60% (Water Soluble)",
            "shade": "#8B0000",
            "ci": "E-120"
        },
    ],
  },

  {
    category: "Synthetic Food Colors",
    description:
      "Synthetic food colors are chemically synthesized additives used to enhance the appearance of food and beverages. They are widely used due to their stability, vibrant hues, and cost-effectiveness. However, they must adhere to strict safety regulations to ensure consumer health.",
   table: [
    { "name": "Erythrosine", "shade": "#F00E7A", "ci": "45430" },
    { "name": "Amaranth", "shade": "#9F2B68", "ci": "16185" },
    { "name": "Brown HT", "shade": "#8B4513", "ci": "20285" },
    { "name": "Brilliant Blue FCF", "shade": "#0096FF", "ci": "42090" },
    { "name": "Patent Blue V", "shade": "#007FFF", "ci": "42051" },
    { "name": "Indigo Carmine", "shade": "#5072A7", "ci": "73015" },
    { "name": "Tartrazine", "shade": "#FFFF00", "ci": "19140" },
    { "name": "Quinoline Yellow WS", "shade": "#E6DA6A", "ci": "47005" },
    { "name": "Sunset Yellow FCF", "shade": "#FF6600", "ci": "15985" },
    { "name": "Allura Red", "shade": "#E15D44", "ci": "16035" },
    { "name": "Ponceau 4R", "shade": "#F08080", "ci": "16255" },
    { "name": "Carmoisine", "shade": "#D70A53", "ci": "14720" },
    { "name": "Green S", "shade": "#20BF55", "ci": "44090" },
    { "name": "Fast Green FCF", "shade": "#20BF55", "ci": "42053" },
    { "name": "Black PN", "shade": "#000000", "ci": "28440" },
   

    { "name": "Egg Yellow", "shade": "#FFA500", "ci": "19140+15985" },
   { "name": "Black CTB", "shade": "#363636", "ci": "14720+19140+42090" },
   { "name": "Black NCTB", "shade": "#4A4A4A", "ci": "14720+19140+42090" },
   { "name": "Black 1011", "shade": "#2F4F4F", "ci": "15985+14720+42090" },
   { "name": "Kesari B", "shade": "#FFB347", "ci": "19140+15985+14720" },
   { "name": "Apple Green", "shade": "#32CD32", "ci": "19140+42090" },
   { "name": "Pea Green", "shade": "#2E8B57", "ci": "19140+42090" },
   { "name": "Rasberry Red", "shade": "#E30B5D", "ci": "14720+15985" },
   { "name": "Strawberry Red", "shade": "#FF4136", "ci": "14720+16255" },
   { "name": "Chocolate Brown Y", "shade": "#8B4513", "ci": "14720+15985+19140+42090+42053" },
   { "name": "Chocolate Brown K1", "shade": "#D2691E", "ci": "15985+42090+14720+19140" },
   { "name": "Chocolate Brown FCF", "shade": "#A0522D", "ci": "15985+16255+42090" }
  ]
  },
  // <p>Food Colours Blends</p> 
  {
    category:"lake/oil soluble",
    description:"",
    table:[
        { "name": "Indigo Carmine Lake", "shade": "#5072A7", "ci": "73015:1" },
        { "name": "Black PN Lake", "shade": "#4B0082", "ci": "28440:1" },
        { "name": "Brown HT Lake", "shade": "#A0522D", "ci": "20285:1" },
        { "name": "Quinoline Yellow Lake", "shade": "#DAA520", "ci": "47005:1" },
        { "name": "Tartrazine Lake", "shade": "#FFD700", "ci": "19140:1" },
        { "name": "Sunset Yellow FCF Lake", "shade": "#FFA500", "ci": "15985:1" },
        { "name": "Ponceau 4R Lake", "shade": "#FA8072", "ci": "16255:1" },
        { "name": "Carmoisine Lake", "shade": "#DC143C", "ci": "14720:1" },
        { "name": "Amaranth Lake", "shade": "#E0115F", "ci": "16185:1" },
        { "name": "Allura Red Lake", "shade": "#CD5C5C", "ci": "16035:1" },
        { "name": "Erythrosine Lake", "shade": "#C71585", "ci": "45430:1" },
        { "name": "Patent Blue V Lake", "shade": "#4682B4", "ci": "42051:1" },
        { "name": "Brilliant Blue FCF Lake", "shade": "#5F9EA0", "ci": "42090:2" },
    
    ]
  },

  {
    category: "Cosmetic Colors",
    description:
      "Cosmetic colors are dyes and pigments used in beauty and personal care products such as lipsticks, eyeshadows, nail polishes, and skincare items. These colors are safe for skin application and comply with cosmetic safety standards.",
      "table": [
        {
            "name": "D&C Red 6 Na Salt",
            "shade": "#D2691E",
            "ci": "15850"
        },
        {
            "name": "D&C Red 21",
            "shade": "#F660AB",
            "ci": "45380:2"
        },
        {
            "name": "D&C Red 21 Al Lake",
            "shade": "#E15D44",
            "ci": "45380:3"
        },
        {
            "name": "D&C Red 22 Al Lake",
            "shade": "#E15D44",
            "ci": "45380:3"
        },
        {
            "name": "D&C Red 27",
            "shade": "#F660AB",
            "ci": "45410:1"
        },
        {
            "name": "D&C Red 27 Al Lake",
            "shade": "#D70A53",
            "ci": "45410:2"
        },
        {
            "name": "D&C Red 28 Al Lake",
            "shade": "#D70A53",
            "ci": "45410:2"
        },
        {
            "name": "D&C Red 33 Al Lake",
            "shade": "#4B0082",
            "ci": "17200:1"
        },
        {
            "name": "D&C Red 36",
            "shade": "#8B4513",
            "ci": "12085"
        },
        {
            "name": "FD&C Yellow 5 Al Lake",
            "shade": "#FFFF00",
            "ci": "19140:1"
        },
        {
            "name": "FD&C Yellow 6 Al Lake",
            "shade": "#FF6600",
            "ci": "15985:1"
        },
        {
            "name": "D&C Yellow 10 Al Lake",
            "shade": "#FFFF00",
            "ci": "47005:1"
        },
        {
            "name": "FD&C Blue 1 Al Lake",
            "shade": "#0096FF",
            "ci": "42090:2"
        },
        {
          "name": "Red Iron Oxide",
          "shade": "#E0B0A5",
          "ci": "77491"
      },
      {
          "name": "D&Yellow Iron Oxide",
          "shade": "#D4AC0D",
          "ci": "77492"
      },
      {
          "name": "Black Iron Oxide",
          "shade": "#000000",
          "ci": "77499"
      },
      {
          "name": "iron oxide brown",
          "shade": "#774F38",
          "ci": "77491, 77492, 77499"
      },
      {
          "name": "Ultramarine Blue",
          "shade": "#4169E1",
          "ci": "77007"
      },
      {
          "name": "Ultramarine Pink",
          "shade": "#D87093",
          "ci": "77007"
      },
      {
          "name": "Ultramarine Violet",
          "shade": "#9370DB",
          "ci": "77007"
      },
      {
          "name": "Manganese Violet",
          "shade": "#800080",
          "ci": "77742"
      },
      {
          "name": "Chromium Oxide Green",
          "shade": "#3CB371",
          "ci": "77288"
      },
      {
          "name": "Chromium Hydroxide Green",
          "shade": "#70db93",
          "ci": "77289"
      },
      {
          "name": "Ferric Ammonium Ferrocyanide/Iron Blue",
          "shade": "#23297A",
          "ci": "77510"
      },
      {
          "name": "Titanium Dioxide",
          "shade": "#FFFFFF",
          "ci": "77891"
      },
      {
          "name": "Carbon Black",
          "shade": "#2E2E2E",
          "ci": "77266"
      },
      {
          "name": "D&C Black 2",
          "shade": "#2E2E2E",
          "ci": "77266"
      },
      {
        "name": "Quinoline Yellow Lake",
        "shade": "#F0E68C",
        "ci": "47005:1"
    },
    {
        "name": "Black PN Lake",
        "shade": "#36454F",
        "ci": "28440:1"
    },
    {
        "name": "Patent Blue V Lake",
        "shade": "#4169E1",
        "ci": "42051:1"
    },
    {
        "name": "Erythrosine Lake",
        "shade": "#F01D7A",
        "ci": "45430:1"
    },
    {
        "name": "Acid Red 52",
        "shade": "#800080",
        "ci": "45100"
    },
    {
        "name": "D&C Red 7 Ca Salt",
        "shade": "#B22222",
        "ci": "15850:1"
    },
    {
        "name": "D&C Red 30",
        "shade": "#A0522D",
        "ci": "73360"
    },
    {
        "name": "D&C Red 34 Ca Salt",
        "shade": "#8B4513",
        "ci": "15880:1"
    },
    {
        "name": "D&C Red 36",
        "shade": "#DC143C",
        "ci": "12085"
    },
    {
        "name": "Ferric Ammonium Ferrocyanide/Iron Blue",
        "shade": "#23297A",
        "ci": "77510"
    },
     {
        "name": "Pigment Yellow 1",
        "shade": "#FFEA46",
        "ci": "11680"
    },
     {
        "name": "Pigment Red 5",
        "shade": "#EF4F4F",
        "ci": "12490"
    },
    {
        "name": "Pigment Green 7",
        "shade": "#00A36C",
        "ci": "74260"
    },
    {
        "name": "Pigment Blue 15:3",
        "shade": "#3F51B5",
        "ci": "74160"
    },
    ]
  },

 

  {
    category: "Home Care & Personal Care Colors",
    description:
      "Home care product colors are dyes and pigments used in household cleaning products such as detergents, dishwashing liquids, and surface cleaners. These colors enhance the visual appeal of the products while ensuring compatibility with cleaning agents.",
    
      table: [
    { "name": "D & C Green 8", "shade": "#90EE90", "ci": "59040" },
    { "name": "D & C Yellow 10", "shade": "#E3DA75", "ci": "47005" },
    { "name": "Quinoline Yellow WS", "shade": "#E6DA6A", "ci": "47005" },
    { "name": "FD & C Yellow 5", "shade": "#FFFF00", "ci": "19140" },
    { "name": "D & C Yellow 8", "shade": "#F0E68C", "ci": "45350" },
    { "name": "FD & C Yellow 6", "shade": "#FF6600", "ci": "15985" },
    { "name": "D & C Orange 4", "shade": "#FF7F50", "ci": "15510" },
    { "name": "Ponceau 4R", "shade": "#F08080", "ci": "16255" },
    { "name": "FD & C Red 4", "shade": "#8E4585", "ci": "14700" },
    { "name": "FD & C Red 40", "shade": "#E15D44", "ci": "16035" },
    { "name": "Red 2G", "shade": "#FF0000", "ci": "18050" },
    { "name": "FD & C Red 3", "shade": "#F660AB", "ci": "45430" },
    { "name": "D & C Red 22", "shade": "#F01D7A", "ci": "45380" },
    { "name": "D & C Red 28", "shade": "#E238EC", "ci": "45410" },
    { "name": "Carmoisine", "shade": "#D70A53", "ci": "14720" },
    { "name": "D & C Red 33", "shade": "#B048B5", "ci": "17200" },
    { "name": "Amaranth", "shade": "#9F2B68", "ci": "16185" },
    { "name": "D & C Green 5", "shade": "#03C03C", "ci": "61570" },
    { "name": "FD & C Green 3", "shade": "#20BF55", "ci": "42053" },
    { "name": "Green S", "shade": "#20BF55", "ci": "44090" },
    { "name": "FD & C Blue 1", "shade": "#0096FF", "ci": "42090" },
    { "name": "Black PN", "shade": "#000000", "ci": "28440" },
    ],
  },
  // {
  //   category: "Personal Care Products Colors",
  //   description:
  //     "Personal care product colors are used in shampoos, soaps, lotions, and other personal care items to enhance their appearance. These colors are safe for skin and hair applications and comply with regulatory standards.",
    
  // },
  ];

  const selectedDye = dyeDetails.find((dye) => dye.category === selectedCategory);

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backs})`,
        }}
      >
        <h1 className="text-white text-4xl font-bold uppercase">Dyes & pigments</h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row py-8 px-4 gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-bold mb-4 text-center">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-3 rounded-md cursor-pointer text-center font-medium ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white shadow-md rounded-md p-6 ">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
          <p className="text-gray-700 mb-6">{selectedDye?.description}</p>

          {selectedDye?.table && selectedDye.table.length > 0 ? (
<div className="overflow-x-auto max-h-[700px] overflow-y-auto ">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2 ">Color Name</th>
        <th className="border border-gray-300 px-4 py-2 ">shade</th>
        <th className="border border-gray-300 px-4 py-2 ">C.l No</th>
      
      </tr>
    </thead>
    <tbody>


        
      {selectedDye.table.map((row, index) => (
        <>

        <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
          <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{row.name}</td>
          <td className="border border-gray-300  whitespace-nowrap">
          <div className="w-25 h-12" style={{ backgroundColor: row.shade }}>
          </div>
          </td>
           <td className="border border-gray-300 px-4 py-2 text-center">{row.ci}</td>  
        </tr>
    
        </>
      ))}
    </tbody>
    </table> 
 </div>
) : (
  <>
     {/* <p>No data available for this category.</p> */}
  <Caramel/>
  </>

)}



        </div>
        
      </div>
      
    </div>

    </>
    
  );
};

export default DyesColors;
