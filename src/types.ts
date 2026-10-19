export type Language = 'en' | 'bn';

export interface EducationItem {
  id: string;
  level: string;
  levelBn: string;
  institution: string;
  institutionBn: string;
  department?: string;
  departmentBn?: string;
  status: string;
  statusBn: string;
  location: string;
  locationBn: string;
  description: string;
  descriptionBn: string;
  iconType: 'university' | 'college' | 'school';
}

export interface ProfileData {
  name: string;
  nameBn: string;
  birthday: string;
  birthDateFormatted: string;
  title: string;
  titleBn: string;
  university: string;
  universityBn: string;
  department: string;
  departmentBn: string;
  homeAddress: string;
  homeAddressBn: string;
  presentAddress: string;
  presentAddressBn: string;
  languages: {
    name: string;
    level: string;
    native: string;
  }[];
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  favorites: {
    movies: {
      title: string;
      tagline: string;
      directorStyle: string;
      themeColor: string;
    }[];
    colors: {
      name: string;
      nameBn: string;
      hex: string;
      description: string;
    }[];
    meat: {
      title: string;
      titleBn: string;
      subtitle: string;
      subtitleBn: string;
    };
    dreamCountry: {
      country: string;
      countryBn: string;
      capital: string;
      landmarks: string[];
      landmarksBn: string[];
      motto: string;
      mottoBn: string;
    };
  };
  hobby: {
    title: string;
    titleBn: string;
    quote: string;
    quoteBn: string;
  };
}
