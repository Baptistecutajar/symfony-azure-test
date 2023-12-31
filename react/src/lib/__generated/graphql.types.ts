export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  contentPartCollection?: Maybe<ContentPartCollection>;
  entryCollection?: Maybe<EntryCollection>;
  seoCollection?: Maybe<SeoCollection>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};


export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsContentPartCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCta = Entry & {
  __typename?: 'ComponentCta';
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subline?: Maybe<ComponentCtaSubline>;
  sys: Sys;
  targetPage?: Maybe<ComponentCtaTargetPage>;
  urlParameters?: Maybe<Scalars['String']['output']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentCta) */
export type ComponentCtaUrlParametersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters?: InputMaybe<Scalars['String']['input']>;
  urlParameters_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlParameters_not?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCtaOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export type ComponentCtaSubline = {
  __typename?: 'ComponentCtaSubline';
  json: Scalars['JSON']['output'];
  links: ComponentCtaSublineLinks;
};

export type ComponentCtaSublineAssets = {
  __typename?: 'ComponentCtaSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCtaSublineEntries = {
  __typename?: 'ComponentCtaSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCtaSublineLinks = {
  __typename?: 'ComponentCtaSublineLinks';
  assets: ComponentCtaSublineAssets;
  entries: ComponentCtaSublineEntries;
};

export type ComponentCtaTargetPage = Page;

/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDemo) */
export type ComponentDemo = Entry & {
  __typename?: 'ComponentDemo';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentDemoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  wysiwyg?: Maybe<ComponentDemoWysiwyg>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDemo) */
export type ComponentDemoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDemo) */
export type ComponentDemoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDemo) */
export type ComponentDemoWysiwygArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentDemoCollection = {
  __typename?: 'ComponentDemoCollection';
  items: Array<Maybe<ComponentDemo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentDemoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDemoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDemoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wysiwyg_contains?: InputMaybe<Scalars['String']['input']>;
  wysiwyg_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wysiwyg_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentDemoLinkingCollections = {
  __typename?: 'ComponentDemoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentDemoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentDemoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentDemoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentDemoWysiwyg = {
  __typename?: 'ComponentDemoWysiwyg';
  json: Scalars['JSON']['output'];
  links: ComponentDemoWysiwygLinks;
};

export type ComponentDemoWysiwygAssets = {
  __typename?: 'ComponentDemoWysiwygAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDemoWysiwygEntries = {
  __typename?: 'ComponentDemoWysiwygEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDemoWysiwygLinks = {
  __typename?: 'ComponentDemoWysiwygLinks';
  assets: ComponentDemoWysiwygAssets;
  entries: ComponentDemoWysiwygEntries;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplex = Entry & {
  __typename?: 'ComponentDuplex';
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  containerLayout?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentDuplexTargetPage>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentDuplex) */
export type ComponentDuplexTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexBodyText = {
  __typename?: 'ComponentDuplexBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentDuplexBodyTextLinks;
};

export type ComponentDuplexBodyTextAssets = {
  __typename?: 'ComponentDuplexBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDuplexBodyTextEntries = {
  __typename?: 'ComponentDuplexBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDuplexBodyTextLinks = {
  __typename?: 'ComponentDuplexBodyTextLinks';
  assets: ComponentDuplexBodyTextAssets;
  entries: ComponentDuplexBodyTextEntries;
};

export type ComponentDuplexCollection = {
  __typename?: 'ComponentDuplexCollection';
  items: Array<Maybe<ComponentDuplex>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentDuplexFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  containerLayout?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentDuplexOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentDuplexTargetPage = Page;

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & {
  __typename?: 'ComponentHeroBanner';
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  greeting?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  heroSize?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentHeroBannerTargetPage>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerGreetingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentHeroBanner) */
export type ComponentHeroBannerTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerBodyText = {
  __typename?: 'ComponentHeroBannerBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentHeroBannerBodyTextLinks;
};

export type ComponentHeroBannerBodyTextAssets = {
  __typename?: 'ComponentHeroBannerBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentHeroBannerBodyTextEntries = {
  __typename?: 'ComponentHeroBannerBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentHeroBannerBodyTextLinks = {
  __typename?: 'ComponentHeroBannerBodyTextLinks';
  assets: ComponentHeroBannerBodyTextAssets;
  entries: ComponentHeroBannerBodyTextEntries;
};

export type ComponentHeroBannerCollection = {
  __typename?: 'ComponentHeroBannerCollection';
  items: Array<Maybe<ComponentHeroBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  greeting?: InputMaybe<Scalars['String']['input']>;
  greeting_contains?: InputMaybe<Scalars['String']['input']>;
  greeting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  greeting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  greeting_not?: InputMaybe<Scalars['String']['input']>;
  greeting_not_contains?: InputMaybe<Scalars['String']['input']>;
  greeting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  GreetingAsc = 'greeting_ASC',
  GreetingDesc = 'greeting_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentHeroBannerTargetPage = Page;

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlock = Entry & {
  __typename?: 'ComponentInfoBlock';
  block1Body?: Maybe<ComponentInfoBlockBlock1Body>;
  block1Image?: Maybe<Asset>;
  block2Body?: Maybe<ComponentInfoBlockBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ComponentInfoBlockBlock3Body>;
  block3Image?: Maybe<Asset>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentInfoBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentInfoBlock) */
export type ComponentInfoBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInfoBlockBlock1Body = {
  __typename?: 'ComponentInfoBlockBlock1Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock1BodyLinks;
};

export type ComponentInfoBlockBlock1BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock1BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock1BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock1BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock1BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock1BodyLinks';
  assets: ComponentInfoBlockBlock1BodyAssets;
  entries: ComponentInfoBlockBlock1BodyEntries;
};

export type ComponentInfoBlockBlock2Body = {
  __typename?: 'ComponentInfoBlockBlock2Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock2BodyLinks;
};

export type ComponentInfoBlockBlock2BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock2BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock2BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock2BodyLinks';
  assets: ComponentInfoBlockBlock2BodyAssets;
  entries: ComponentInfoBlockBlock2BodyEntries;
};

export type ComponentInfoBlockBlock3Body = {
  __typename?: 'ComponentInfoBlockBlock3Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock3BodyLinks;
};

export type ComponentInfoBlockBlock3BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock3BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock3BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock3BodyLinks';
  assets: ComponentInfoBlockBlock3BodyAssets;
  entries: ComponentInfoBlockBlock3BodyEntries;
};

export type ComponentInfoBlockCollection = {
  __typename?: 'ComponentInfoBlockCollection';
  items: Array<Maybe<ComponentInfoBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentInfoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']['input']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_contains?: InputMaybe<Scalars['String']['input']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_contains?: InputMaybe<Scalars['String']['input']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentInfoBlockLinkingCollections = {
  __typename?: 'ComponentInfoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentInfoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentInfoBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentInfoBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTable = Entry & {
  __typename?: 'ComponentProductTable';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentProductTableLinkingCollections>;
  productsCollection?: Maybe<ComponentProductTableProductsCollection>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTableHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTableInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTableProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentProductTable) */
export type ComponentProductTableSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductTableCollection = {
  __typename?: 'ComponentProductTableCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentProductTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products?: InputMaybe<CfTopicProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentProductTableLinkingCollections = {
  __typename?: 'ComponentProductTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentProductTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentProductTableLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentProductTableOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentProductTableProductsCollection = {
  __typename?: 'ComponentProductTableProductsCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuote = Entry & {
  __typename?: 'ComponentQuote';
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imagePosition?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentQuoteLinkingCollections>;
  quote?: Maybe<ComponentQuoteQuote>;
  quoteAlignment?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentQuote) */
export type ComponentQuoteQuoteAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentQuoteCollection = {
  __typename?: 'ComponentQuoteCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAlignment?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_not?: InputMaybe<Scalars['Boolean']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentQuoteLinkingCollections = {
  __typename?: 'ComponentQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentQuoteOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuoteAlignmentAsc = 'quoteAlignment_ASC',
  QuoteAlignmentDesc = 'quoteAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentQuoteQuote = {
  __typename?: 'ComponentQuoteQuote';
  json: Scalars['JSON']['output'];
  links: ComponentQuoteQuoteLinks;
};

export type ComponentQuoteQuoteAssets = {
  __typename?: 'ComponentQuoteQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentQuoteQuoteEntries = {
  __typename?: 'ComponentQuoteQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentQuoteQuoteLinks = {
  __typename?: 'ComponentQuoteQuoteLinks';
  assets: ComponentQuoteQuoteAssets;
  entries: ComponentQuoteQuoteEntries;
};

/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlock = Entry & {
  __typename?: 'ComponentTextBlock';
  body?: Maybe<ComponentTextBlockBody>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentTextBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/componentTextBlock) */
export type ComponentTextBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentTextBlockBody = {
  __typename?: 'ComponentTextBlockBody';
  json: Scalars['JSON']['output'];
  links: ComponentTextBlockBodyLinks;
};

export type ComponentTextBlockBodyAssets = {
  __typename?: 'ComponentTextBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextBlockBodyEntries = {
  __typename?: 'ComponentTextBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextBlockBodyLinks = {
  __typename?: 'ComponentTextBlockBodyLinks';
  assets: ComponentTextBlockBodyAssets;
  entries: ComponentTextBlockBodyEntries;
};

export type ComponentTextBlockCollection = {
  __typename?: 'ComponentTextBlockCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentTextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentTextBlockLinkingCollections = {
  __typename?: 'ComponentTextBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentTextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentTextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentTextBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/contentPart) */
export type ContentPart = Entry & {
  __typename?: 'ContentPart';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContentPartLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/contentPart) */
export type ContentPartImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/contentPart) */
export type ContentPartLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/contentPart) */
export type ContentPartTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentPartCollection = {
  __typename?: 'ContentPartCollection';
  items: Array<Maybe<ContentPart>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentPartFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentPartFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentPartFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentPartLinkingCollections = {
  __typename?: 'ContentPartLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentPartLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentPartOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']['output']>;
  instagramLink?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']['output']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']['output']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  facebookLink_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramLink?: InputMaybe<Scalars['String']['input']>;
  instagramLink_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']['input']>;
  twitterLink_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterMenuOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroup = Entry & {
  __typename?: 'MenuGroup';
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  groupLink?: Maybe<MenuGroupGroupLink>;
  groupName?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<MenuGroupFeaturedPagesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupFeaturedPagesItem = Page;

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupGroupLink = Page;

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuGroupOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  sys: Sys;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContent?: Maybe<PagePageContent>;
  pageName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PagePageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExtraSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
};


export type PageLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePageContent = ComponentProductTable | TopicBusinessInfo | TopicProduct;

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageTopSectionItem = ComponentCta | ComponentDemo | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock;

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDemo?: Maybe<ComponentDemo>;
  componentDemoCollection?: Maybe<ComponentDemoCollection>;
  componentDuplex?: Maybe<ComponentDuplex>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBanner?: Maybe<ComponentHeroBanner>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlock?: Maybe<ComponentInfoBlock>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentProductTable?: Maybe<ComponentProductTable>;
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  componentQuote?: Maybe<ComponentQuote>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  componentTextBlock?: Maybe<ComponentTextBlock>;
  componentTextBlockCollection?: Maybe<ComponentTextBlockCollection>;
  contentPart?: Maybe<ContentPart>;
  contentPartCollection?: Maybe<ContentPartCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  menuGroup?: Maybe<MenuGroup>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  site?: Maybe<Site>;
  siteCollection?: Maybe<SiteCollection>;
  topicBusinessInfo?: Maybe<TopicBusinessInfo>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicPerson?: Maybe<TopicPerson>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProduct?: Maybe<TopicProduct>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductFeature?: Maybe<TopicProductFeature>;
  topicProductFeatureCollection?: Maybe<TopicProductFeatureCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentDemoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentDemoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDemoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentDemoFilter>;
};


export type QueryComponentDuplexArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};


export type QueryComponentHeroBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};


export type QueryComponentInfoBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};


export type QueryComponentProductTableArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};


export type QueryComponentQuoteArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};


export type QueryComponentTextBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


export type QueryContentPartArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentPartCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentPartOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentPartFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryMenuGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySiteArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SiteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteFilter>;
};


export type QueryTopicBusinessInfoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicBusinessInfoFilter>;
};


export type QueryTopicPersonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicPersonFilter>;
};


export type QueryTopicProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};


export type QueryTopicProductFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicProductFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type Site = Entry & {
  __typename?: 'Site';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SiteLinkingCollections>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  siteName?: Maybe<Scalars['String']['output']>;
  siteSlug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type SiteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type SiteLocalesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type SitePrimaryColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type SiteSiteNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/site) */
export type SiteSiteSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteCollection = {
  __typename?: 'SiteCollection';
  items: Array<Maybe<Site>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteFilter = {
  AND?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  locales_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locales_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locales_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locales_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  primaryColor_contains?: InputMaybe<Scalars['String']['input']>;
  primaryColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryColor_not?: InputMaybe<Scalars['String']['input']>;
  primaryColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  primaryColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteName?: InputMaybe<Scalars['String']['input']>;
  siteName_contains?: InputMaybe<Scalars['String']['input']>;
  siteName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteName_not?: InputMaybe<Scalars['String']['input']>;
  siteName_not_contains?: InputMaybe<Scalars['String']['input']>;
  siteName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteSlug?: InputMaybe<Scalars['String']['input']>;
  siteSlug_contains?: InputMaybe<Scalars['String']['input']>;
  siteSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteSlug_not?: InputMaybe<Scalars['String']['input']>;
  siteSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  siteSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SiteLinkingCollections = {
  __typename?: 'SiteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SiteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SiteOrder {
  PrimaryColorAsc = 'primaryColor_ASC',
  PrimaryColorDesc = 'primaryColor_DESC',
  SiteNameAsc = 'siteName_ASC',
  SiteNameDesc = 'siteName_DESC',
  SiteSlugAsc = 'siteSlug_ASC',
  SiteSlugDesc = 'siteSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfo = Entry & {
  __typename?: 'TopicBusinessInfo';
  body?: Maybe<TopicBusinessInfoBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicBusinessInfoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicBusinessInfo) */
export type TopicBusinessInfoShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicBusinessInfoBody = {
  __typename?: 'TopicBusinessInfoBody';
  json: Scalars['JSON']['output'];
  links: TopicBusinessInfoBodyLinks;
};

export type TopicBusinessInfoBodyAssets = {
  __typename?: 'TopicBusinessInfoBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicBusinessInfoBodyEntries = {
  __typename?: 'TopicBusinessInfoBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicBusinessInfoBodyLinks = {
  __typename?: 'TopicBusinessInfoBodyLinks';
  assets: TopicBusinessInfoBodyAssets;
  entries: TopicBusinessInfoBodyEntries;
};

export type TopicBusinessInfoCollection = {
  __typename?: 'TopicBusinessInfoCollection';
  items: Array<Maybe<TopicBusinessInfo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicBusinessInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicBusinessInfoLinkingCollections = {
  __typename?: 'TopicBusinessInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TopicBusinessInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TopicBusinessInfoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicBusinessInfoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPerson = Entry & {
  __typename?: 'TopicPerson';
  avatar?: Maybe<Asset>;
  bio?: Maybe<TopicPersonBio>;
  cardStyle?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicPersonLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicPerson) */
export type TopicPersonWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicPersonBio = {
  __typename?: 'TopicPersonBio';
  json: Scalars['JSON']['output'];
  links: TopicPersonBioLinks;
};

export type TopicPersonBioAssets = {
  __typename?: 'TopicPersonBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicPersonBioEntries = {
  __typename?: 'TopicPersonBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicPersonBioLinks = {
  __typename?: 'TopicPersonBioLinks';
  assets: TopicPersonBioAssets;
  entries: TopicPersonBioEntries;
};

export type TopicPersonCollection = {
  __typename?: 'TopicPersonCollection';
  items: Array<Maybe<TopicPerson>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicPersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardStyle?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TopicPersonLinkingCollections = {
  __typename?: 'TopicPersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TopicPersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicPersonOrder {
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProduct = Entry & {
  __typename?: 'TopicProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopicProductDescription>;
  featuredImage?: Maybe<Asset>;
  featuresCollection?: Maybe<TopicProductFeaturesCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProduct) */
export type TopicProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicProductCollection = {
  __typename?: 'TopicProductCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductDescription = {
  __typename?: 'TopicProductDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductDescriptionLinks;
};

export type TopicProductDescriptionAssets = {
  __typename?: 'TopicProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductDescriptionEntries = {
  __typename?: 'TopicProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductDescriptionLinks = {
  __typename?: 'TopicProductDescriptionLinks';
  assets: TopicProductDescriptionAssets;
  entries: TopicProductDescriptionEntries;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeature = Entry & {
  __typename?: 'TopicProductFeature';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductFeatureLinkingCollections>;
  longDescription?: Maybe<TopicProductFeatureLongDescription>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<TopicProductFeatureShortDescription>;
  sys: Sys;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeatureLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/sd0a7tn24wc2/content_types/topicProductFeature) */
export type TopicProductFeatureShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicProductFeatureCollection = {
  __typename?: 'TopicProductFeatureCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductFeatureLinkingCollections = {
  __typename?: 'TopicProductFeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};


export type TopicProductFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TopicProductFeatureLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicProductFeatureLongDescription = {
  __typename?: 'TopicProductFeatureLongDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureLongDescriptionLinks;
};

export type TopicProductFeatureLongDescriptionAssets = {
  __typename?: 'TopicProductFeatureLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureLongDescriptionEntries = {
  __typename?: 'TopicProductFeatureLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureLongDescriptionLinks = {
  __typename?: 'TopicProductFeatureLongDescriptionLinks';
  assets: TopicProductFeatureLongDescriptionAssets;
  entries: TopicProductFeatureLongDescriptionEntries;
};

export enum TopicProductFeatureOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureShortDescription = {
  __typename?: 'TopicProductFeatureShortDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureShortDescriptionLinks;
};

export type TopicProductFeatureShortDescriptionAssets = {
  __typename?: 'TopicProductFeatureShortDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureShortDescriptionEntries = {
  __typename?: 'TopicProductFeatureShortDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureShortDescriptionLinks = {
  __typename?: 'TopicProductFeatureShortDescriptionLinks';
  assets: TopicProductFeatureShortDescriptionAssets;
  entries: TopicProductFeatureShortDescriptionEntries;
};

export type TopicProductFeaturesCollection = {
  __typename?: 'TopicProductFeaturesCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<CfTopicProductFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductLinkingCollections = {
  __typename?: 'TopicProductLinkingCollections';
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TopicProductLinkingCollectionsComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TopicProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TopicProductLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTopicProductFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTopicProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentPartFieldsFragment = { __typename: 'ContentPart', title?: string | null, sys: { __typename?: 'Sys', id: string } };

export type DemoFieldsFragment = { __typename: 'ComponentDemo', title?: string | null, sys: { __typename?: 'Sys', id: string }, wysiwyg?: { __typename?: 'ComponentDemoWysiwyg', json: any, links: { __typename?: 'ComponentDemoWysiwygLinks', entries: { __typename?: 'ComponentDemoWysiwygEntries', block: Array<{ __typename?: 'ComponentCta' } | { __typename?: 'ComponentDemo' } | { __typename?: 'ComponentDuplex' } | { __typename?: 'ComponentHeroBanner' } | { __typename?: 'ComponentInfoBlock' } | { __typename?: 'ComponentProductTable' } | { __typename?: 'ComponentQuote' } | { __typename?: 'ComponentTextBlock' } | { __typename: 'ContentPart', title?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu' } | { __typename?: 'MenuGroup' } | { __typename?: 'NavigationMenu' } | { __typename?: 'Page' } | { __typename?: 'Seo' } | { __typename?: 'Site' } | { __typename?: 'TopicBusinessInfo' } | { __typename?: 'TopicPerson' } | { __typename?: 'TopicProduct' } | { __typename?: 'TopicProductFeature' } | null>, hyperlink: Array<{ __typename?: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDemo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentPart', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Site', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type DemoPersonsFieldsFragment = { __typename: 'TopicPersonCollection', items: Array<{ __typename?: 'TopicPerson', name?: string | null, sys: { __typename?: 'Sys', id: string } } | null> };

export type CtfDemoQueryVariables = Exact<{
  id?: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfDemoQuery = { __typename?: 'Query', componentDemo?: { __typename: 'ComponentDemo', title?: string | null, sys: { __typename?: 'Sys', id: string }, wysiwyg?: { __typename?: 'ComponentDemoWysiwyg', json: any, links: { __typename?: 'ComponentDemoWysiwygLinks', entries: { __typename?: 'ComponentDemoWysiwygEntries', block: Array<{ __typename?: 'ComponentCta' } | { __typename?: 'ComponentDemo' } | { __typename?: 'ComponentDuplex' } | { __typename?: 'ComponentHeroBanner' } | { __typename?: 'ComponentInfoBlock' } | { __typename?: 'ComponentProductTable' } | { __typename?: 'ComponentQuote' } | { __typename?: 'ComponentTextBlock' } | { __typename: 'ContentPart', title?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu' } | { __typename?: 'MenuGroup' } | { __typename?: 'NavigationMenu' } | { __typename?: 'Page' } | { __typename?: 'Seo' } | { __typename?: 'Site' } | { __typename?: 'TopicBusinessInfo' } | { __typename?: 'TopicPerson' } | { __typename?: 'TopicProduct' } | { __typename?: 'TopicProductFeature' } | null>, hyperlink: Array<{ __typename?: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDemo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentPart', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Site', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null, topicPersonCollection?: { __typename: 'TopicPersonCollection', items: Array<{ __typename?: 'TopicPerson', name?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

type PageTopSectionFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageTopSectionFields_ComponentDemo_Fragment = { __typename: 'ComponentDemo' };

type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageTopSectionFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageTopSectionFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageTopSectionFieldsFragment = PageTopSectionFields_ComponentCta_Fragment | PageTopSectionFields_ComponentDemo_Fragment | PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentInfoBlock_Fragment | PageTopSectionFields_ComponentQuote_Fragment | PageTopSectionFields_ComponentTextBlock_Fragment;

type PageContentFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable' };

type PageContentFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo' };

type PageContentFields_TopicProduct_Fragment = { __typename: 'TopicProduct' };

export type PageContentFieldsFragment = PageContentFields_ComponentProductTable_Fragment | PageContentFields_TopicBusinessInfo_Fragment | PageContentFields_TopicProduct_Fragment;

type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageExtraSectionItemFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageExtraSectionItemFieldsFragment = PageExtraSectionItemFields_ComponentCta_Fragment | PageExtraSectionItemFields_ComponentDuplex_Fragment | PageExtraSectionItemFields_ComponentHeroBanner_Fragment | PageExtraSectionItemFields_ComponentInfoBlock_Fragment | PageExtraSectionItemFields_ComponentQuote_Fragment | PageExtraSectionItemFields_ComponentTextBlock_Fragment;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDemo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContent?: { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDemo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContent?: { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type CtfPageSlugsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfPageSlugsQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null } | null> } | null };

export type SiteQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SiteQuery = { __typename?: 'Query', siteCollection?: { __typename?: 'SiteCollection', items: Array<{ __typename?: 'Site', locales?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };
