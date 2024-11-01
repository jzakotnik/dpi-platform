/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Representation of an asset in a supply chain.
 */
export type Project = {
  /**
   * Property. Unique identifier of the entity
   */
  id: string;
  /**
   * Property. Entity creation timestamp. This will usually be allocated by the storage platform.
   */
  dateCreated?: string;
  /**
   * Property. Timestamp of the last modification of the entity. This will usually be allocated by the storage platform.
   */
  dateModified?: string;
  /**
   * Property. A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object.
   */
  alternateName?: string;
  /**
   * Property. A title of this item
   */
  description?: string;
  /**
   * Property. A sequence of characters identifying the provider of the harmonised data entity.
   */
  dataProvider?: string;
  /**
   * Property. A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)
   */
  owner?: string[];
  /**
   * Property. NSGI Entity Type. it has to be Project
   */
  type: 'Project';

  /**
   * Property. Category of the Asset. Enum:'biochar, biogas, biomass, energy, CRC'
   */
  category: 'E-Payment' | 'E-Identity' | 'E-Health' | 'Data Exchange';
  funding?: 'Offering' | 'Co-funding';
  image?: string;
  author?: string;
};
