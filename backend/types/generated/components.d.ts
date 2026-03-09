import type { Schema, Struct } from '@strapi/strapi';

export interface NavDropdownLinks extends Struct.ComponentSchema {
  collectionName: 'components_nav_dropdown_links';
  info: {
    displayName: 'dropdownLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    dropdownLinks: Schema.Attribute.Component<'nav.dropdown-links', true>;
    hasDropdown: Schema.Attribute.Boolean;
    isButton: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_links';
  info: {
    displayName: 'nav-links';
  };
  attributes: {
    dropdownLinks: Schema.Attribute.Component<'nav.dropdown-links', true>;
    hasDropdown: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsAboutCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_core_values';
  info: {
    displayName: 'about core values';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_ctas';
  info: {
    displayName: 'aboutCTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_heroes';
  info: {
    displayName: 'about-hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutMission extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_missions';
  info: {
    displayName: 'about mission';
  };
  attributes: {
    aboutValues: Schema.Attribute.Component<'shared.feature-card', true>;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'about-section';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUniq extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_uniqs';
  info: {
    displayName: 'about uniq';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutcorevalues extends Struct.ComponentSchema {
  collectionName: 'components_sections_aboutcorevalues';
  info: {
    displayName: 'aboutcorevalues';
  };
  attributes: {
    aboutCoreValues: Schema.Attribute.Component<
      'sections.about-core-values',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutservices extends Struct.ComponentSchema {
  collectionName: 'components_sections_aboutservices';
  info: {
    displayName: 'aboutservices';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutuniq extends Struct.ComponentSchema {
  collectionName: 'components_sections_aboutuniqs';
  info: {
    displayName: 'aboutuniq';
  };
  attributes: {
    aboutuniq: Schema.Attribute.Component<'sections.about-uniq', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefitsOfOurCloudSolutions
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_of_our_cloud_solutions';
  info: {
    displayName: 'Benefits of Our Cloud Solutions';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_sections';
  info: {
    displayName: 'blog-section';
  };
  attributes: {
    badge: Schema.Attribute.String;
    blogcard: Schema.Attribute.Component<'shared.blog-card', true>;
    Button: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBusinessHours extends Struct.ComponentSchema {
  collectionName: 'components_sections_business_hours';
  info: {
    displayName: 'business-hours';
  };
  attributes: {
    emergencySupport: Schema.Attribute.Boolean;
    emergencyText: Schema.Attribute.String;
    mondayFriday: Schema.Attribute.String;
    saturday: Schema.Attribute.String;
    sunday: Schema.Attribute.String;
  };
}

export interface SectionsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_studies';
  info: {
    displayName: 'case-study';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    caseCard: Schema.Attribute.Component<'shared.case-study-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudExpertise extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_expertises';
  info: {
    displayName: 'CloudExpertise';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solution_ctas';
  info: {
    displayName: 'CloudSolutionCTA';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionPick extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solution_picks';
  info: {
    displayName: 'CloudSolutionPick';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionchoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutionchooses';
  info: {
    displayName: 'CloudSolutionchoose';
  };
  attributes: {
    CloudSolutionPick: Schema.Attribute.Component<
      'sections.cloud-solution-pick',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionprocess extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutionprocesses';
  info: {
    displayName: 'CloudSolutionprocess';
  };
  attributes: {
    CloudSolutionsProcess: Schema.Attribute.Component<
      'sections.cloud-solutionsprocess',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutions';
  info: {
    displayName: 'Cloud Solutions';
  };
  attributes: {
    CloudSolutionsChooseCard: Schema.Attribute.Component<
      'sections.cloud-solutionschoosecard',
      true
    >;
  };
}

export interface SectionsCloudSolutionsBenifits extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutions_benifits';
  info: {
    displayName: 'CloudSolutionsBenifits';
  };
  attributes: {
    CloudSolutionBenifitCard: Schema.Attribute.Component<
      'shared.cloud-solutionbenifitcard',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionschoosecard
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutionschoosecards';
  info: {
    displayName: 'CloudSolutionschoosecard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudSolutionsprocess extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloud_solutionsprocesses';
  info: {
    displayName: 'CloudSolutionsprocess';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCloudhero extends Struct.ComponentSchema {
  collectionName: 'components_sections_cloudheroes';
  info: {
    displayName: 'Cloudhero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    andText: Schema.Attribute.String;
    companyNameLabel: Schema.Attribute.String;
    companyNamePlaceholder: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNamePlaceholder: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    phoneNumberLabel: Schema.Attribute.String;
    phoneNumberPlaceholder: Schema.Attribute.String;
    policyText: Schema.Attribute.String;
    privacyPolicyLabel: Schema.Attribute.String;
    sendingLabel: Schema.Attribute.String;
    submitLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    termsLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_heroes';
  info: {
    displayName: 'Contact Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    addressTitle: Schema.Attribute.String;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface SectionsCyberServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_cyber_services';
  info: {
    displayName: 'cyber services';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsCybersecurityStrategy extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurity_strategies';
  info: {
    displayName: 'Cybersecurity Strategy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsCybersecurrity extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurrities';
  info: {
    displayName: 'Cybersecurrity';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurrityServiceHero
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurrity_service_heroes';
  info: {
    displayName: ' Cybersecurrity service hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurrityServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurrity_services';
  info: {
    displayName: ' Cybersecurrity services';
  };
  attributes: {
    cyberServices: Schema.Attribute.Component<'sections.cyber-services', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurritycards extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurritycards';
  info: {
    displayName: 'Cybersecurritycards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurritycontact extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurritycontacts';
  info: {
    displayName: 'Cybersecurritycontact';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurritysolutins extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurritysolutins';
  info: {
    displayName: ' Cybersecurritysolutins';
  };
  attributes: {
    CybersecurrityCards: Schema.Attribute.Component<
      'sections.cybersecurritycards',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCybersecurritystrategies
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_cybersecurritystrategies';
  info: {
    displayName: ' Cybersecurritystrategies';
  };
  attributes: {
    CybersecurityStrategycard: Schema.Attribute.Component<
      'sections.cybersecurity-strategy',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevCont extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_conts';
  info: {
    displayName: 'dev-cont';
  };
  attributes: {
    Button: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevFetures extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_fetures';
  info: {
    displayName: 'dev-fetures';
  };
  attributes: {
    DevFetCard: Schema.Attribute.Component<'sections.devfetcard', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_heroes';
  info: {
    displayName: 'dev-hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevPoint extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_points';
  info: {
    displayName: 'dev-point';
  };
  attributes: {
    Button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_processes';
  info: {
    displayName: 'dev-process';
  };
  attributes: {
    DevProcessCard: Schema.Attribute.Component<'sections.devprocesscard', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevSpecs extends Struct.ComponentSchema {
  collectionName: 'components_sections_dev_specs';
  info: {
    displayName: 'dev-specs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    DevSpecCard: Schema.Attribute.Component<'sections.devspeccard', true>;
  };
}

export interface SectionsDevfetcard extends Struct.ComponentSchema {
  collectionName: 'components_sections_devfetcards';
  info: {
    displayName: 'devfetcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevprocesscard extends Struct.ComponentSchema {
  collectionName: 'components_sections_devprocesscards';
  info: {
    displayName: 'devprocesscard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDevspeccard extends Struct.ComponentSchema {
  collectionName: 'components_sections_devspeccards';
  info: {
    displayName: 'devspeccard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_sliders';
  info: {
    displayName: 'home-slider';
  };
  attributes: {
    homeSlider: Schema.Attribute.Component<'sections.homeslider', true>;
  };
}

export interface SectionsHomeslider extends Struct.ComponentSchema {
  collectionName: 'components_sections_homesliders';
  info: {
    displayName: 'homeslider';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIndustries extends Struct.ComponentSchema {
  collectionName: 'components_sections_industries';
  info: {
    displayName: 'industries';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    industryCard: Schema.Attribute.Component<'shared.industry-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMapSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_map_sections';
  info: {
    displayName: 'Map Section';
  };
  attributes: {
    googleMapEmbedUrl: Schema.Attribute.String;
    locationTitle: Schema.Attribute.String;
  };
}

export interface SectionsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    serviceCards: Schema.Attribute.Component<'shared.service-card', true>;
  };
}

export interface SectionsServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_heroes';
  info: {
    displayName: 'service hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServiceSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_sections';
  info: {
    displayName: 'service-Sections';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.service-card', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsServicecontact extends Struct.ComponentSchema {
  collectionName: 'components_sections_servicecontacts';
  info: {
    displayName: 'servicecontact';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    servicebtnurl: Schema.Attribute.String;
    servicebutton: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTechStack extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_stacks';
  info: {
    displayName: 'tech-stack';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    techitem: Schema.Attribute.Component<'shared.tech-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    badge: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    testimonialcard: Schema.Attribute.Component<
      'shared.testimonials-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWebDevelopmentContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_web_development_contacts';
  info: {
    displayName: 'Web Development contact';
  };
  attributes: {
    Button: Schema.Attribute.String;
    buttonlink: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWebDevelopmentHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_web_development_heroes';
  info: {
    displayName: 'WebDevelopmentHero';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primarybutton: Schema.Attribute.String;
    primarybuttonurl: Schema.Attribute.String;
    seconadrybutton: Schema.Attribute.String;
    seconadrybuttonurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWebDevelopmentTech extends Struct.ComponentSchema {
  collectionName: 'components_sections_web_development_teches';
  info: {
    displayName: 'Web DevelopmentTech';
  };
  attributes: {
    title: Schema.Attribute.String;
    WebDevelopmentTechCard: Schema.Attribute.Component<
      'shared.web-development-tech-card',
      true
    >;
  };
}

export interface SectionsWebDevelopmentchoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_web_developmentchooses';
  info: {
    displayName: 'WebDevelopmentchoose';
  };
  attributes: {
    title: Schema.Attribute.String;
    WebDevelopmentPick: Schema.Attribute.Component<
      'shared.web-development-pick',
      true
    >;
  };
}

export interface SharedBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_cards';
  info: {
    displayName: 'blog-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface SharedCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_case_study_cards';
  info: {
    displayName: 'case-study-card';
  };
  attributes: {
    link: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCloudSolutionbenifitcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cloud_solutionbenifitcards';
  info: {
    displayName: 'CloudSolutionbenifitcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'feature-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_industry_cards';
  info: {
    displayName: 'industry-card';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'service-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-links';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'linkedin', 'instagram']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedTechItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_items';
  info: {
    displayName: 'tech-item';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedTestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials_cards';
  info: {
    displayName: 'testimonials-card';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedWebDevelopmentPick extends Struct.ComponentSchema {
  collectionName: 'components_shared_web_development_picks';
  info: {
    displayName: 'WebDevelopmentPick';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedWebDevelopmentTechCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_web_development_tech_cards';
  info: {
    displayName: 'WebDevelopmentTechCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nav.dropdown-links': NavDropdownLinks;
      'nav.link': NavLink;
      'nav.nav-links': NavNavLinks;
      'sections.about-core-values': SectionsAboutCoreValues;
      'sections.about-cta': SectionsAboutCta;
      'sections.about-hero': SectionsAboutHero;
      'sections.about-mission': SectionsAboutMission;
      'sections.about-section': SectionsAboutSection;
      'sections.about-uniq': SectionsAboutUniq;
      'sections.aboutcorevalues': SectionsAboutcorevalues;
      'sections.aboutservices': SectionsAboutservices;
      'sections.aboutuniq': SectionsAboutuniq;
      'sections.benefits-of-our-cloud-solutions': SectionsBenefitsOfOurCloudSolutions;
      'sections.blog-section': SectionsBlogSection;
      'sections.business-hours': SectionsBusinessHours;
      'sections.case-study': SectionsCaseStudy;
      'sections.cloud-expertise': SectionsCloudExpertise;
      'sections.cloud-solution-cta': SectionsCloudSolutionCta;
      'sections.cloud-solution-pick': SectionsCloudSolutionPick;
      'sections.cloud-solutionchoose': SectionsCloudSolutionchoose;
      'sections.cloud-solutionprocess': SectionsCloudSolutionprocess;
      'sections.cloud-solutions': SectionsCloudSolutions;
      'sections.cloud-solutions-benifits': SectionsCloudSolutionsBenifits;
      'sections.cloud-solutionschoosecard': SectionsCloudSolutionschoosecard;
      'sections.cloud-solutionsprocess': SectionsCloudSolutionsprocess;
      'sections.cloudhero': SectionsCloudhero;
      'sections.contact-form': SectionsContactForm;
      'sections.contact-hero': SectionsContactHero;
      'sections.contact-info': SectionsContactInfo;
      'sections.cyber-services': SectionsCyberServices;
      'sections.cybersecurity-strategy': SectionsCybersecurityStrategy;
      'sections.cybersecurrity': SectionsCybersecurrity;
      'sections.cybersecurrity-service-hero': SectionsCybersecurrityServiceHero;
      'sections.cybersecurrity-services': SectionsCybersecurrityServices;
      'sections.cybersecurritycards': SectionsCybersecurritycards;
      'sections.cybersecurritycontact': SectionsCybersecurritycontact;
      'sections.cybersecurritysolutins': SectionsCybersecurritysolutins;
      'sections.cybersecurritystrategies': SectionsCybersecurritystrategies;
      'sections.dev-cont': SectionsDevCont;
      'sections.dev-fetures': SectionsDevFetures;
      'sections.dev-hero': SectionsDevHero;
      'sections.dev-point': SectionsDevPoint;
      'sections.dev-process': SectionsDevProcess;
      'sections.dev-specs': SectionsDevSpecs;
      'sections.devfetcard': SectionsDevfetcard;
      'sections.devprocesscard': SectionsDevprocesscard;
      'sections.devspeccard': SectionsDevspeccard;
      'sections.hero': SectionsHero;
      'sections.home-slider': SectionsHomeSlider;
      'sections.homeslider': SectionsHomeslider;
      'sections.industries': SectionsIndustries;
      'sections.map-section': SectionsMapSection;
      'sections.service-card': SectionsServiceCard;
      'sections.service-hero': SectionsServiceHero;
      'sections.service-sections': SectionsServiceSections;
      'sections.servicecontact': SectionsServicecontact;
      'sections.tech-stack': SectionsTechStack;
      'sections.testimonials': SectionsTestimonials;
      'sections.web-development-contact': SectionsWebDevelopmentContact;
      'sections.web-development-hero': SectionsWebDevelopmentHero;
      'sections.web-development-tech': SectionsWebDevelopmentTech;
      'sections.web-developmentchoose': SectionsWebDevelopmentchoose;
      'shared.blog-card': SharedBlogCard;
      'shared.button': SharedButton;
      'shared.case-study-card': SharedCaseStudyCard;
      'shared.cloud-solutionbenifitcard': SharedCloudSolutionbenifitcard;
      'shared.feature-card': SharedFeatureCard;
      'shared.industry-card': SharedIndustryCard;
      'shared.service-card': SharedServiceCard;
      'shared.social-links': SharedSocialLinks;
      'shared.tech-item': SharedTechItem;
      'shared.testimonials-card': SharedTestimonialsCard;
      'shared.web-development-pick': SharedWebDevelopmentPick;
      'shared.web-development-tech-card': SharedWebDevelopmentTechCard;
    }
  }
}
