import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Coffee time",
    color: colors.yellow,
    cover: "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Relax and cats",
    color: colors.green,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Fly & listen the music",
    color: colors.blue,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Go, go, GO!",
    color: colors.purple,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Wild life",
    color: colors.orange,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c325cfb2-7900-4571-80e1-6c2f704dc2f0/Leonardo_Diffusion_XL_high_quality_highly_detailed_beautifully_2.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: '7',
    albumId: 7,
    title: "The best of the world",
    color: colors.orange,
    cover:
      "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    artists: ["Glow city"],
  }
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/e3d7ff99-1f26-420a-beac-cc90f1f42633/Leonardo_Diffusion_XL_music_album_cover_for_songs_you_like_on_3.jpg?w=512",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5b9cfa97-8872-4c4d-ad19-65f63b533713/Leonardo_Diffusion_XL_portada_de_disco_de_msica_para_canciones_0.jpg",
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/9d2738cf-187c-4108-921e-1552c49ddcee/Leonardo_Diffusion_XL_disco_de_msica_para_das_de_lluva_y_caf_1.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/5ca09415-839f-475a-bc4e-e790103c4de2/Leonardo_Diffusion_XL_Ultra_detailed_illustration_of_a_sky_wit_0.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/f113e248-cdeb-4bf1-83d4-596d44d8b054/Leonardo_Diffusion_XL_a_formula_1_helmet_American_style_like_i_1.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },

  {
    "id": 1,
    "albumId": 6,
    "title": "Sea",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c325cfb2-7900-4571-80e1-6c2f704dc2f0/Leonardo_Diffusion_XL_high_quality_highly_detailed_beautifully_2.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Beach",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c325cfb2-7900-4571-80e1-6c2f704dc2f0/Leonardo_Diffusion_XL_high_quality_highly_detailed_beautifully_2.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "Beach and sun",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c325cfb2-7900-4571-80e1-6c2f704dc2f0/Leonardo_Diffusion_XL_high_quality_highly_detailed_beautifully_2.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Summer Vibes",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c325cfb2-7900-4571-80e1-6c2f704dc2f0/Leonardo_Diffusion_XL_high_quality_highly_detailed_beautifully_2.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  

  {
    "id": 1,
    "albumId": 7,
    "title": "EDM",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 7,
    "title": "EDM 2",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 7,
    "title": "EDM 3",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 7,
    "title": "EDM Party",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 7,
    "title": "Be EDM",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 6,
    "albumId": 7,
    "title": "Trap Instrumental",
    "image": "https://cdn.leonardo.ai/users/7218e508-16cd-4cf7-aadf-34cee0f42519/generations/c6c2e553-5d25-4915-af73-baf0ceccabfd/Leonardo_Diffusion_XL_Quiero_un_logotipo_de_para_una_plataform_0.jpg?w=512",
    "artists": ["Glow city"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  }
]