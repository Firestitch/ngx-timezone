import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FsTimezone {

  public get timezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  public get timezones(): { identifier: string, description: string }[] {
    return [
      {
        identifier: 'Pacific/Midway',
        description: 'Samoa Standard Time: Midway'
      },
      {
        identifier: 'Pacific/Niue',
        description: 'Niue Time: Niue'
      },
      {
        identifier: 'Pacific/Pago_Pago',
        description: 'Samoa Standard Time: Pago Pago'
      },
      {
        identifier: 'America/Adak',
        description: 'Hawaii Standard Time: Adak'
      },
      {
        identifier: 'Pacific/Honolulu',
        description: 'Hawaii Standard Time: Honolulu'
      },
      {
        identifier: 'Pacific/Rarotonga',
        description: 'Hawaii Standard Time: Rarotonga'
      },
      {
        identifier: 'Pacific/Tahiti',
        description: 'Tahiti Time: Tahiti'
      },
      {
        identifier: 'Pacific/Marquesas',
        description: 'Marquesas Time: Marquesas'
      },
      {
        identifier: 'America/Anchorage',
        description: 'Alaska Standard Time: Anchorage'
      },
      {
        identifier: 'America/Juneau',
        description: 'Alaska Standard Time: Juneau'
      },
      {
        identifier: 'America/Nome',
        description: 'Alaska Standard Time: Nome'
      },
      {
        identifier: 'America/Yakutat',
        description: 'Alaska Standard Time: Yakutat'
      },
      {
        identifier: 'Pacific/Gambier',
        description: 'Gambier Time: Gambier'
      },
      {
        identifier: 'America/Dawson',
        description: 'Pacific Standard Time: Dawson'
      },
      {
        identifier: 'America/Los_Angeles',
        description: 'Pacific Standard Time: Los Angeles'
      },
      {
        identifier: 'America/Tijuana',
        description: 'Northwest Zone: Tijuana'
      },
      {
        identifier: 'America/Vancouver',
        description: 'Pacific Standard Time: Vancouver'
      },
      {
        identifier: 'America/Whitehorse',
        description: 'Pacific Standard Time: Whitehorse'
      },
      {
        identifier: 'Pacific/Pitcairn',
        description: 'Pitcairn Standard Time: Pitcairn'
      },
      {
        identifier: 'America/Boise',
        description: 'Mountain Standard Time: Boise'
      },
      {
        identifier: 'America/Cambridge_Bay',
        description: 'Mountain Standard Time: Cambridge Bay'
      },
      {
        identifier: 'America/Chihuahua',
        description: 'Pacific Zone: Chihuahua'
      },
      {
        identifier: 'America/Dawson_Creek',
        description: 'Mountain Standard Time: Dawson Creek'
      },
      {
        identifier: 'America/Denver',
        description: 'Mountain Standard Time: Denver'
      },
      {
        identifier: 'America/Edmonton',
        description: 'Mountain Standard Time: Edmonton'
      },
      {
        identifier: 'America/Hermosillo',
        description: 'Pacific Zone: Hermosillo'
      },
      {
        identifier: 'America/Inuvik',
        description: 'Mountain Standard Time: Inuvik'
      },
      {
        identifier: 'America/Mazatlan',
        description: 'Pacific Zone: Mazatlan'
      },
      {
        identifier: 'America/Ojinaga',
        description: 'Pacific Zone: Ojinaga'
      },
      {
        identifier: 'America/Phoenix',
        description: 'Mountain Standard Time: Phoenix'
      },
      {
        identifier: 'America/Yellowknife',
        description: 'Mountain Standard Time: Yellowknife'
      },
      {
        identifier: 'America/Bahia_Banderas',
        description: 'Central Zone: Bahia Banderas'
      },
      {
        identifier: 'America/Belize',
        description: 'Central Standard Time: Belize'
      },
      {
        identifier: 'America/Cancun',
        description: 'Central Zone: Cancun'
      },
      {
        identifier: 'America/Chicago',
        description: 'Central Standard Time: Chicago'
      },
      {
        identifier: 'America/Costa_Rica',
        description: 'Central Standard Time: Costa Rica'
      },
      {
        identifier: 'America/El_Salvador',
        description: 'Central Standard Time: El Salvador'
      },
      {
        identifier: 'America/Guatemala',
        description: 'Central Standard Time: Guatemala'
      },
      {
        identifier: 'America/Indiana/Knox',
        description: 'Central Standard Time: Knox'
      },
      {
        identifier: 'America/Indiana/Tell_City',
        description: 'Central Standard Time: Tell City'
      },
      {
        identifier: 'America/Managua',
        description: 'Central Standard Time: Managua'
      },
      {
        identifier: 'America/Matamoros',
        description: 'Central Zone: Matamoros'
      },
      {
        identifier: 'America/Menominee',
        description: 'Central Standard Time: Menominee'
      },
      {
        identifier: 'America/Merida',
        description: 'Central Zone: Merida'
      },
      {
        identifier: 'America/Mexico_City',
        description: 'Central Zone: Mexico City'
      },
      {
        identifier: 'America/Monterrey',
        description: 'Central Zone: Monterrey'
      },
      {
        identifier: 'America/North_Dakota/Beulah',
        description: 'Central Standard Time: Beulah'
      },
      {
        identifier: 'America/North_Dakota/Center',
        description: 'Central Standard Time: Center'
      },
      {
        identifier: 'America/North_Dakota/New_Salem',
        description: 'Central Standard Time: New Salem'
      },
      {
        identifier: 'America/Rainy_River',
        description: 'Central Standard Time: Rainy River'
      },
      {
        identifier: 'America/Rankin_Inlet',
        description: 'Central Standard Time: Rankin Inlet'
      },
      {
        identifier: 'America/Regina',
        description: 'Central Standard Time: Regina'
      },
      {
        identifier: 'America/Resolute',
        description: 'Eastern Standard Time: Resolute'
      },
      {
        identifier: 'America/Swift_Current',
        description: 'Central Standard Time: Swift Current'
      },
      {
        identifier: 'America/Tegucigalpa',
        description: 'Central Standard Time: Tegucigalpa'
      },
      {
        identifier: 'America/Winnipeg',
        description: 'Central Standard Time: Winnipeg'
      },
      {
        identifier: 'Pacific/Easter',
        description: 'Easter Island Standard Time: Easter'
      },
      {
        identifier: 'Pacific/Galapagos',
        description: 'Galápagos Time: Galapagos'
      },
      {
        identifier: 'America/Atikokan',
        description: 'Eastern Standard Time: Atikokan'
      },
      {
        identifier: 'America/Bogota',
        description: 'Colombia Time: Bogota'
      },
      {
        identifier: 'America/Cayman',
        description: 'Eastern Standard Time: Cayman'
      },
      {
        identifier: 'America/Detroit',
        description: 'Eastern Standard Time: Detroit'
      },
      {
        identifier: 'America/Grand_Turk',
        description: 'Eastern Standard Time: Grand Turk'
      },
      {
        identifier: 'America/Guayaquil',
        description: 'Ecuador Time: Guayaquil'
      },
      {
        identifier: 'America/Havana',
        description: 'Eastern Standard Time: Havana'
      },
      {
        identifier: 'America/Indiana/Indianapolis',
        description: 'Eastern Standard Time: Indianapolis'
      },
      {
        identifier: 'America/Indiana/Marengo',
        description: 'Eastern Standard Time: Marengo'
      },
      {
        identifier: 'America/Indiana/Petersburg',
        description: 'Eastern Standard Time: Petersburg'
      },
      {
        identifier: 'America/Indiana/Vevay',
        description: 'Eastern Standard Time: Vevay'
      },
      {
        identifier: 'America/Indiana/Vincennes',
        description: 'Eastern Standard Time: Vincennes'
      },
      {
        identifier: 'America/Indiana/Winamac',
        description: 'Eastern Standard Time: Winamac'
      },
      {
        identifier: 'America/Iqaluit',
        description: 'Eastern Standard Time: Iqaluit'
      },
      {
        identifier: 'America/Jamaica',
        description: 'Eastern Standard Time: Jamaica'
      },
      {
        identifier: 'America/Kentucky/Louisville',
        description: 'Eastern Standard Time: Louisville'
      },
      {
        identifier: 'America/Kentucky/Monticello',
        description: 'Eastern Standard Time: Monticello'
      },
      {
        identifier: 'America/Lima',
        description: 'Peru Time: Lima'
      },
      {
        identifier: 'America/Nassau',
        description: 'Eastern Standard Time: Nassau'
      },
      {
        identifier: 'America/New_York',
        description: 'Eastern Standard Time: New York'
      },
      {
        identifier: 'America/Nipigon',
        description: 'Eastern Standard Time: Nipigon'
      },
      {
        identifier: 'America/Panama',
        description: 'Eastern Standard Time: Panama'
      },
      {
        identifier: 'America/Pangnirtung',
        description: 'Eastern Standard Time: Pangnirtung'
      },
      {
        identifier: 'America/Port-au-Prince',
        description: 'Eastern Standard Time: Port-au-Prince'
      },
      {
        identifier: 'America/Thunder_Bay',
        description: 'Eastern Standard Time: Thunder Bay'
      },
      {
        identifier: 'America/Toronto',
        description: 'Eastern Standard Time: Toronto'
      },
      {
        identifier: 'America/Caracas',
        description: 'Venezuelan Standard Time: Caracas'
      },
      {
        identifier: 'America/Anguilla',
        description: 'Atlantic Standard Time: Anguilla'
      },
      {
        identifier: 'America/Antigua',
        description: 'Atlantic Standard Time: Antigua'
      },
      {
        identifier: 'America/Aruba',
        description: 'Atlantic Standard Time: Aruba'
      },
      {
        identifier: 'America/Asuncion',
        description: 'Paraguay Standard Time: Asuncion'
      },
      {
        identifier: 'America/Barbados',
        description: 'Atlantic Standard Time: Barbados'
      },
      {
        identifier: 'America/Blanc-Sablon',
        description: 'Atlantic Standard Time: Blanc-Sablon'
      },
      {
        identifier: 'America/Boa_Vista',
        description: 'Amazon Time: Boa Vista'
      },
      {
        identifier: 'America/Campo_Grande',
        description: 'Amazon Time: Campo Grande'
      },
      {
        identifier: 'America/Cuiaba',
        description: 'Amazon Time: Cuiaba'
      },
      {
        identifier: 'America/Curacao',
        description: 'Atlantic Standard Time: Curacao'
      },
      {
        identifier: 'America/Dominica',
        description: 'Atlantic Standard Time: Dominica'
      },
      {
        identifier: 'America/Eirunepe',
        description: 'Amazon Time: Eirunepe'
      },
      {
        identifier: 'America/Glace_Bay',
        description: 'Atlantic Standard Time: Glace Bay'
      },
      {
        identifier: 'America/Goose_Bay',
        description: 'Atlantic Standard Time: Goose Bay'
      },
      {
        identifier: 'America/Grenada',
        description: 'Atlantic Standard Time: Grenada'
      },
      {
        identifier: 'America/Guadeloupe',
        description: 'Atlantic Standard Time: Guadeloupe'
      },
      {
        identifier: 'America/Guyana',
        description: 'Guyana Time: Guyana'
      },
      {
        identifier: 'America/Halifax',
        description: 'Atlantic Standard Time: Halifax'
      },
      {
        identifier: 'America/La_Paz',
        description: 'Bolivia Time: La Paz'
      },
      {
        identifier: 'America/Manaus',
        description: 'Amazon Time: Manaus'
      },
      {
        identifier: 'America/Marigot',
        description: 'Atlantic Standard Time: Marigot'
      },
      {
        identifier: 'America/Martinique',
        description: 'Atlantic Standard Time: Martinique'
      },
      {
        identifier: 'America/Moncton',
        description: 'Atlantic Standard Time: Moncton'
      },
      {
        identifier: 'America/Montserrat',
        description: 'Atlantic Standard Time: Montserrat'
      },
      {
        identifier: 'America/Port_of_Spain',
        description: 'Atlantic Standard Time: Port of Spain'
      },
      {
        identifier: 'America/Porto_Velho',
        description: 'Amazon Time: Porto Velho'
      },
      {
        identifier: 'America/Puerto_Rico',
        description: 'Atlantic Standard Time: Puerto Rico'
      },
      {
        identifier: 'America/Rio_Branco',
        description: 'Amazon Time: Rio Branco'
      },
      {
        identifier: 'America/Santiago',
        description: 'Chile Standard Time: Santiago'
      },
      {
        identifier: 'America/Santo_Domingo',
        description: 'Atlantic Standard Time: Santo Domingo'
      },
      {
        identifier: 'America/St_Barthelemy',
        description: 'Atlantic Standard Time: St Barthelemy'
      },
      {
        identifier: 'America/St_Kitts',
        description: 'Atlantic Standard Time: St Kitts'
      },
      {
        identifier: 'America/St_Lucia',
        description: 'Atlantic Standard Time: St Lucia'
      },
      {
        identifier: 'America/St_Thomas',
        description: 'Atlantic Standard Time: St Thomas'
      },
      {
        identifier: 'America/St_Vincent',
        description: 'Atlantic Standard Time: St Vincent'
      },
      {
        identifier: 'America/Thule',
        description: 'Northwestern Greenland: Thule'
      },
      {
        identifier: 'America/Tortola',
        description: 'Atlantic Standard Time: Tortola'
      },
      {
        identifier: 'Atlantic/Bermuda',
        description: 'Atlantic Standard Time: Bermuda'
      },
      {
        identifier: 'America/St_Johns',
        description: 'Newfoundland Time: St Johns'
      },
      {
        identifier: 'America/Araguaina',
        description: 'Brasilia Time: Araguaina'
      },
      {
        identifier: 'America/Argentina/Buenos_Aires',
        description: 'Argentina Time: Buenos Aires'
      },
      {
        identifier: 'America/Argentina/Catamarca',
        description: 'Argentina Time: Catamarca'
      },
      {
        identifier: 'America/Argentina/Cordoba',
        description: 'Argentina Time: Cordoba'
      },
      {
        identifier: 'America/Argentina/Jujuy',
        description: 'Argentina Time: Jujuy'
      },
      {
        identifier: 'America/Argentina/La_Rioja',
        description: 'Argentina Time: La Rioja'
      },
      {
        identifier: 'America/Argentina/Mendoza',
        description: 'Argentina Time: Mendoza'
      },
      {
        identifier: 'America/Argentina/Rio_Gallegos',
        description: 'Argentina Time: Rio Gallegos'
      },
      {
        identifier: 'America/Argentina/Salta',
        description: 'Argentina Time: Salta'
      },
      {
        identifier: 'America/Argentina/San_Juan',
        description: 'Argentina Time: San Juan'
      },
      {
        identifier: 'America/Argentina/San_Luis',
        description: 'Argentina Time: San Luis'
      },
      {
        identifier: 'America/Argentina/Tucuman',
        description: 'Argentina Time: Tucuman'
      },
      {
        identifier: 'America/Argentina/Ushuaia',
        description: 'Argentina Time: Ushuaia'
      },
      {
        identifier: 'America/Bahia',
        description: 'Brasilia Time: Bahia'
      },
      {
        identifier: 'America/Belem',
        description: 'Brasilia Time: Belem'
      },
      {
        identifier: 'America/Cayenne',
        description: 'French Guiana Time: Cayenne'
      },
      {
        identifier: 'America/Fortaleza',
        description: 'Brasilia Time: Fortaleza'
      },
      {
        identifier: 'America/Maceio',
        description: 'Brasilia Time: Maceio'
      },
      {
        identifier: 'America/Miquelon',
        description: 'St Pierre and Miquelon Time: Miquelon'
      },
      {
        identifier: 'America/Montevideo',
        description: 'Uruguay Standard Time: Montevideo'
      },
      {
        identifier: 'America/Paramaribo',
        description: 'Suriname Time: Paramaribo'
      },
      {
        identifier: 'America/Recife',
        description: 'Brasilia Time: Recife'
      },
      {
        identifier: 'America/Santarem',
        description: 'Amazon Time: Santarem'
      },
      {
        identifier: 'America/Sao_Paulo',
        description: 'Brasilia Time: Sao Paulo'
      },
      {
        identifier: 'Atlantic/Stanley',
        description: 'Falkland Islands Time: Stanley'
      },
      {
        identifier: 'America/Noronha',
        description: 'Fernando de Noronha Time: Noronha'
      },
      {
        identifier: 'America/Scoresbysund',
        description: 'Greenland Time: Scoresbysund'
      },
      {
        identifier: 'Atlantic/Azores',
        description: 'Azores Standard Time: Azores'
      },
      {
        identifier: 'Atlantic/Cape_Verde',
        description: 'Cape Verde Time: Cape Verde'
      },
      {
        identifier: 'Africa/Abidjan',
        description: 'Greenwich Mean Time: Abidjan'
      },
      {
        identifier: 'Africa/Accra',
        description: 'Greenwich Mean Time: Accra'
      },
      {
        identifier: 'Africa/Bamako',
        description: 'Greenwich Mean Time: Bamako'
      },
      {
        identifier: 'Africa/Banjul',
        description: 'Greenwich Mean Time: Banjul'
      },
      {
        identifier: 'Africa/Bissau',
        description: 'Greenwich Mean Time: Bissau'
      },
      {
        identifier: 'Africa/Casablanca',
        description: 'Western European Time: Casablanca'
      },
      {
        identifier: 'Africa/Conakry',
        description: 'Greenwich Mean Time: Conakry'
      },
      {
        identifier: 'Africa/Dakar',
        description: 'Greenwich Mean Time: Dakar'
      },
      {
        identifier: 'Africa/El_Aaiun',
        description: 'Greenwich Mean Time: El Aaiun'
      },
      {
        identifier: 'Africa/Freetown',
        description: 'Greenwich Mean Time: Freetown'
      },
      {
        identifier: 'Africa/Lome',
        description: 'Greenwich Mean Time: Lome'
      },
      {
        identifier: 'Africa/Monrovia',
        description: 'Greenwich Mean Time: Monrovia'
      },
      {
        identifier: 'Africa/Nouakchott',
        description: 'Greenwich Mean Time: Nouakchott'
      },
      {
        identifier: 'Africa/Ouagadougou',
        description: 'Greenwich Mean Time: Ouagadougou'
      },
      {
        identifier: 'Africa/Sao_Tome',
        description: 'Greenwich Mean Time: Sao Tome'
      },
      {
        identifier: 'America/Danmarkshavn',
        description: 'Greenwich Mean Time: Danmarkshavn'
      },
      {
        identifier: 'Atlantic/Canary',
        description: 'Western European Time: Canary'
      },
      {
        identifier: 'Atlantic/Faroe',
        description: 'Western European Time: Faroe'
      },
      {
        identifier: 'Atlantic/Madeira',
        description: 'Azores Standard Time: Madeira'
      },
      {
        identifier: 'Atlantic/Reykjavik',
        description: 'Greenwich Mean Time: Reykjavik'
      },
      {
        identifier: 'Atlantic/St_Helena',
        description: 'Greenwich Mean Time: St Helena'
      },
      {
        identifier: 'Europe/Dublin',
        description: 'Western European Time: Dublin'
      },
      {
        identifier: 'Europe/Guernsey',
        description: 'Greenwich Mean Time: Guernsey'
      },
      {
        identifier: 'Europe/Isle_of_Man',
        description: 'Greenwich Mean Time: Isle of Man'
      },
      {
        identifier: 'Europe/Jersey',
        description: 'Greenwich Mean Time: Jersey'
      },
      {
        identifier: 'Europe/Lisbon',
        description: 'Western European Time: Lisbon'
      },
      {
        identifier: 'Europe/London',
        description: 'Greenwich Mean Time: London'
      },
      {
        identifier: 'Africa/Algiers',
        description: 'Central European Time: Algiers'
      },
      {
        identifier: 'Africa/Bangui',
        description: 'West Africa Time: Bangui'
      },
      {
        identifier: 'Africa/Brazzaville',
        description: 'West Africa Time: Brazzaville'
      },
      {
        identifier: 'Africa/Ceuta',
        description: 'Central European Time: Ceuta'
      },
      {
        identifier: 'Africa/Douala',
        description: 'West Africa Time: Douala'
      },
      {
        identifier: 'Africa/Kinshasa',
        description: 'West Africa Time: Kinshasa'
      },
      {
        identifier: 'Africa/Lagos',
        description: 'West Africa Time: Lagos'
      },
      {
        identifier: 'Africa/Libreville',
        description: 'West Africa Time: Libreville'
      },
      {
        identifier: 'Africa/Luanda',
        description: 'West Africa Time: Luanda'
      },
      {
        identifier: 'Africa/Malabo',
        description: 'West Africa Time: Malabo'
      },
      {
        identifier: 'Africa/Ndjamena',
        description: 'West Africa Time: Ndjamena'
      },
      {
        identifier: 'Africa/Niamey',
        description: 'West Africa Time: Niamey'
      },
      {
        identifier: 'Africa/Porto-Novo',
        description: 'West Africa Time: Porto-Novo'
      },
      {
        identifier: 'Africa/Tunis',
        description: 'Central European Time: Tunis'
      },
      {
        identifier: 'Africa/Windhoek',
        description: 'West Africa Time: Windhoek'
      },
      {
        identifier: 'Arctic/Longyearbyen',
        description: 'Central European Time: Longyearbyen'
      },
      {
        identifier: 'Europe/Amsterdam',
        description: 'Central European Time: Amsterdam'
      },
      {
        identifier: 'Europe/Andorra',
        description: 'Central European Time: Andorra'
      },
      {
        identifier: 'Europe/Belgrade',
        description: 'Central European Time: Belgrade'
      },
      {
        identifier: 'Europe/Berlin',
        description: 'Central European Time: Berlin'
      },
      {
        identifier: 'Europe/Bratislava',
        description: 'Central European Time: Bratislava'
      },
      {
        identifier: 'Europe/Brussels',
        description: 'Central European Time: Brussels'
      },
      {
        identifier: 'Europe/Budapest',
        description: 'Central European Time: Budapest'
      },
      {
        identifier: 'Europe/Copenhagen',
        description: 'Central European Time: Copenhagen'
      },
      {
        identifier: 'Europe/Gibraltar',
        description: 'Central European Time: Gibraltar'
      },
      {
        identifier: 'Europe/Ljubljana',
        description: 'Central European Time: Ljubljana'
      },
      {
        identifier: 'Europe/Luxembourg',
        description: 'Central European Time: Luxembourg'
      },
      {
        identifier: 'Europe/Madrid',
        description: 'Central European Time: Madrid'
      },
      {
        identifier: 'Europe/Malta',
        description: 'Central European Time: Malta'
      },
      {
        identifier: 'Europe/Monaco',
        description: 'Central European Time: Monaco'
      },
      {
        identifier: 'Europe/Oslo',
        description: 'Central European Time: Oslo'
      },
      {
        identifier: 'Europe/Paris',
        description: 'Central European Time: Paris'
      },
      {
        identifier: 'Europe/Podgorica',
        description: 'Central European Time: Podgorica'
      },
      {
        identifier: 'Europe/Prague',
        description: 'Central European Time: Prague'
      },
      {
        identifier: 'Europe/Rome',
        description: 'Central European Time: Rome'
      },
      {
        identifier: 'Europe/San_Marino',
        description: 'Central European Time: San Marino'
      },
      {
        identifier: 'Europe/Sarajevo',
        description: 'Central European Time: Sarajevo'
      },
      {
        identifier: 'Europe/Skopje',
        description: 'Central European Time: Skopje'
      },
      {
        identifier: 'Europe/Stockholm',
        description: 'Central European Time: Stockholm'
      },
      {
        identifier: 'Europe/Tirane',
        description: 'Central European Time: Tirane'
      },
      {
        identifier: 'Europe/Vaduz',
        description: 'Central European Time: Vaduz'
      },
      {
        identifier: 'Europe/Vatican',
        description: 'Central European Time: Vatican'
      },
      {
        identifier: 'Europe/Vienna',
        description: 'Central European Time: Vienna'
      },
      {
        identifier: 'Europe/Warsaw',
        description: 'Central European Time: Warsaw'
      },
      {
        identifier: 'Europe/Zagreb',
        description: 'Central European Time: Zagreb'
      },
      {
        identifier: 'Europe/Zurich',
        description: 'Central European Time: Zurich'
      },
      {
        identifier: 'Africa/Blantyre',
        description: 'Central Africa Time: Blantyre'
      },
      {
        identifier: 'Africa/Bujumbura',
        description: 'Central Africa Time: Bujumbura'
      },
      {
        identifier: 'Africa/Cairo',
        description: 'Eastern European Time: Cairo'
      },
      {
        identifier: 'Africa/Gaborone',
        description: 'Central Africa Time: Gaborone'
      },
      {
        identifier: 'Africa/Harare',
        description: 'Central Africa Time: Harare'
      },
      {
        identifier: 'Africa/Johannesburg',
        description: 'South African Standard Time: Johannesburg'
      },
      {
        identifier: 'Africa/Kigali',
        description: 'Central Africa Time: Kigali'
      },
      {
        identifier: 'Africa/Lubumbashi',
        description: 'Central Africa Time: Lubumbashi'
      },
      {
        identifier: 'Africa/Lusaka',
        description: 'Central Africa Time: Lusaka'
      },
      {
        identifier: 'Africa/Maputo',
        description: 'Central Africa Time: Maputo'
      },
      {
        identifier: 'Africa/Maseru',
        description: 'South African Standard Time: Maseru'
      },
      {
        identifier: 'Africa/Mbabane',
        description: 'South African Standard Time: Mbabane'
      },
      {
        identifier: 'Africa/Tripoli',
        description: 'Eastern European Time: Tripoli'
      },
      {
        identifier: 'Asia/Beirut',
        description: 'Eastern European Time: Beirut'
      },
      {
        identifier: 'Asia/Damascus',
        description: 'Eastern European Time: Damascus'
      },
      {
        identifier: 'Asia/Gaza',
        description: 'Eastern European Time: Gaza'
      },
      {
        identifier: 'Asia/Jerusalem',
        description: 'Israel Standard Time: Jerusalem'
      },
      {
        identifier: 'Asia/Nicosia',
        description: 'Eastern European Time: Nicosia'
      },
      {
        identifier: 'Europe/Athens',
        description: 'Eastern European Time: Athens'
      },
      {
        identifier: 'Europe/Bucharest',
        description: 'Eastern European Time: Bucharest'
      },
      {
        identifier: 'Europe/Chisinau',
        description: 'Eastern European Time: Chisinau'
      },
      {
        identifier: 'Europe/Helsinki',
        description: 'Eastern European Time: Helsinki'
      },
      {
        identifier: 'Europe/Istanbul',
        description: 'Eastern European Time: Istanbul'
      },
      {
        identifier: 'Europe/Kiev',
        description: 'Eastern European Time: Kiev'
      },
      {
        identifier: 'Europe/Mariehamn',
        description: 'Eastern European Time: Mariehamn'
      },
      {
        identifier: 'Europe/Riga',
        description: 'Eastern European Time: Riga'
      },
      {
        identifier: 'Europe/Simferopol',
        description: 'Eastern European Time: Simferopol'
      },
      {
        identifier: 'Europe/Sofia',
        description: 'Eastern European Time: Sofia'
      },
      {
        identifier: 'Europe/Tallinn',
        description: 'Eastern European Time: Tallinn'
      },
      {
        identifier: 'Europe/Uzhgorod',
        description: 'Eastern European Time: Uzhgorod'
      },
      {
        identifier: 'Europe/Vilnius',
        description: 'Eastern European Time: Vilnius'
      },
      {
        identifier: 'Europe/Zaporozhye',
        description: 'Eastern European Time: Zaporozhye'
      },
      {
        identifier: 'Africa/Addis_Ababa',
        description: 'East Africa Time: Addis Ababa'
      },
      {
        identifier: 'Africa/Asmara',
        description: 'East Africa Time: Asmara'
      },
      {
        identifier: 'Africa/Dar_es_Salaam',
        description: 'East Africa Time: Dar es Salaam'
      },
      {
        identifier: 'Africa/Djibouti',
        description: 'East Africa Time: Djibouti'
      },
      {
        identifier: 'Africa/Juba',
        description: 'East Africa Time: Juba'
      },
      {
        identifier: 'Africa/Kampala',
        description: 'East Africa Time: Kampala'
      },
      {
        identifier: 'Africa/Khartoum',
        description: 'East Africa Time: Khartoum'
      },
      {
        identifier: 'Africa/Mogadishu',
        description: 'East Africa Time: Mogadishu'
      },
      {
        identifier: 'Africa/Nairobi',
        description: 'East Africa Time: Nairobi'
      },
      {
        identifier: 'Asia/Aden',
        description: 'Arabic Standard Time: Aden'
      },
      {
        identifier: 'Asia/Amman',
        description: 'Arabia Standard Time: Amman'
      },
      {
        identifier: 'Asia/Baghdad',
        description: 'Arabic Standard Time: Baghdad'
      },
      {
        identifier: 'Asia/Bahrain',
        description: 'Arabic Standard Time: Bahrain'
      },
      {
        identifier: 'Asia/Kuwait',
        description: 'Arabic Standard Time: Kuwait'
      },
      {
        identifier: 'Asia/Qatar',
        description: 'Arabic Standard Time: Qatar'
      },
      {
        identifier: 'Asia/Riyadh',
        description: 'Arabic Standard Time: Riyadh'
      },
      {
        identifier: 'Europe/Kaliningrad',
        description: 'Eastern European Time: Kaliningrad'
      },
      {
        identifier: 'Europe/Minsk',
        description: 'Eastern European Time: Minsk'
      },
      {
        identifier: 'Indian/Antananarivo',
        description: 'East Africa Time: Antananarivo'
      },
      {
        identifier: 'Indian/Comoro',
        description: 'East Africa Time: Comoro'
      },
      {
        identifier: 'Indian/Mayotte',
        description: 'East Africa Time: Mayotte'
      },
      {
        identifier: 'Asia/Tehran',
        description: 'Iran Standard Time: Tehran'
      },
      {
        identifier: 'Asia/Baku',
        description: 'Azerbaijan Time: Baku'
      },
      {
        identifier: 'Asia/Dubai',
        description: 'Arabian Standard Time: Dubai'
      },
      {
        identifier: 'Asia/Muscat',
        description: 'Arabian Standard Time: Muscat'
      },
      {
        identifier: 'Asia/Tbilisi',
        description: 'Georgia Time: Tbilisi'
      },
      {
        identifier: 'Asia/Yerevan',
        description: 'Armenia Time: Yerevan'
      },
      {
        identifier: 'Europe/Moscow',
        description: 'Moscow Standard Time: Moscow'
      },
      {
        identifier: 'Europe/Samara',
        description: 'Samara Time: Samara'
      },
      {
        identifier: 'Europe/Volgograd',
        description: 'Moscow Standard Time: Volgograd'
      },
      {
        identifier: 'Indian/Mahe',
        description: 'Seychelles Time: Mahe'
      },
      {
        identifier: 'Indian/Mauritius',
        description: 'Mauritius Time: Mauritius'
      },
      {
        identifier: 'Indian/Reunion',
        description: 'Reunion Time: Reunion'
      },
      {
        identifier: 'Asia/Kabul',
        description: 'Afghanistan Time: Kabul'
      },
      {
        identifier: 'Asia/Aqtau',
        description: 'Western Kazakhstan Time: Aqtau'
      },
      {
        identifier: 'Asia/Aqtobe',
        description: 'Western Kazakhstan Time: Aqtobe'
      },
      {
        identifier: 'Asia/Ashgabat',
        description: 'Turkmenistan Time: Ashgabat'
      },
      {
        identifier: 'Asia/Dushanbe',
        description: 'Tajikistan Time: Dushanbe'
      },
      {
        identifier: 'Asia/Karachi',
        description: 'Pakistan Standard Time: Karachi'
      },
      {
        identifier: 'Asia/Oral',
        description: 'Western Kazakhstan Time: Oral'
      },
      {
        identifier: 'Asia/Samarkand',
        description: 'Uzbekistan Time: Samarkand'
      },
      {
        identifier: 'Asia/Tashkent',
        description: 'Uzbekistan Time: Tashkent'
      },
      {
        identifier: 'Indian/Kerguelen',
        description: 'French Southern and Antarctic Time: Kerguelen'
      },
      {
        identifier: 'Indian/Maldives',
        description: 'Maldives Time: Maldives'
      },
      {
        identifier: 'Asia/Colombo',
        description: 'Sri Lanka Time: Colombo'
      },
      {
        identifier: 'Asia/Kolkata',
        description: 'Indian Standard Time: Kolkata'
      },
      {
        identifier: 'Asia/Kathmandu',
        description: 'Nepal Time: Kathmandu'
      },
      {
        identifier: 'Asia/Almaty',
        description: 'Eastern Kazakhstan Time: Almaty'
      },
      {
        identifier: 'Asia/Bishkek',
        description: 'Kyrgyzstan Time: Bishkek'
      },
      {
        identifier: 'Asia/Dhaka',
        description: 'Bangladesh Standard Time: Dhaka'
      },
      {
        identifier: 'Asia/Qyzylorda',
        description: 'Eastern Kazakhstan Time: Qyzylorda'
      },
      {
        identifier: 'Asia/Thimphu',
        description: 'Bhutan Time: Thimphu'
      },
      {
        identifier: 'Asia/Yekaterinburg',
        description: 'Yekaterinburg Time: Yekaterinburg'
      },
      {
        identifier: 'Indian/Cocos',
        description: 'Cocos Islands Time: Cocos'
      },
      {
        identifier: 'Asia/Bangkok',
        description: 'SE Asia Standard Time: Bangkok'
      },
      {
        identifier: 'Asia/Ho_Chi_Minh',
        description: 'SE Asia Standard Time: Ho Chi Minh'
      },
      {
        identifier: 'Asia/Hovd',
        description: 'Hovd Standard Time: Hovd'
      },
      {
        identifier: 'Asia/Jakarta',
        description: 'Western Indonesian Time: Jakarta'
      },
      {
        identifier: 'Asia/Novokuznetsk',
        description: 'Novosibirsk Time: Novokuznetsk'
      },
      {
        identifier: 'Asia/Novosibirsk',
        description: 'Novosibirsk Time: Novosibirsk'
      },
      {
        identifier: 'Asia/Omsk',
        description: 'Omsk Time: Omsk'
      },
      {
        identifier: 'Asia/Phnom_Penh',
        description: 'SE Asia Standard Time: Phnom Penh'
      },
      {
        identifier: 'Asia/Pontianak',
        description: 'Western Indonesian Time: Pontianak'
      },
      {
        identifier: 'Asia/Vientiane',
        description: 'SE Asia Standard Time: Vientiane'
      },
      {
        identifier: 'Indian/Christmas',
        description: 'Line Islands Time: Christmas'
      },
      {
        identifier: 'Asia/Brunei',
        description: 'Brunei Time: Brunei'
      },
      {
        identifier: 'Asia/Choibalsan',
        description: 'Choibalsan Standard Time: Choibalsan'
      },
      {
        identifier: 'Asia/Hong_Kong',
        description: 'Hong Kong Time: Hong Kong'
      },
      {
        identifier: 'Asia/Krasnoyarsk',
        description: 'Krasnoyarsk Time: Krasnoyarsk'
      },
      {
        identifier: 'Asia/Kuala_Lumpur',
        description: 'Malaysian Standard Time: Kuala Lumpur'
      },
      {
        identifier: 'Asia/Kuching',
        description: 'Malaysian Standard Time: Kuching'
      },
      {
        identifier: 'Asia/Macau',
        description: 'Macau Time: Macau'
      },
      {
        identifier: 'Asia/Makassar',
        description: 'Central Indonesian Time: Makassar'
      },
      {
        identifier: 'Asia/Manila',
        description: 'Philippines Time: Manila'
      },
      {
        identifier: 'Asia/Shanghai',
        description: 'China Standard Time: Shanghai'
      },
      {
        identifier: 'Asia/Singapore',
        description: 'Singapore Standard Time: Singapore'
      },
      {
        identifier: 'Asia/Taipei',
        description: 'China Standard Time: Taipei'
      },
      {
        identifier: 'Asia/Ulaanbaatar',
        description: 'Ulaanbaatar Time: Ulaanbaatar'
      },
      {
        identifier: 'Asia/Urumqi',
        description: 'China Standard Time: Urumqi'
      },
      {
        identifier: 'Australia/Perth',
        description: 'Australian Western Standard Time: Perth'
      },
      {
        identifier: 'Australia/Eucla',
        description: 'Central Western Australia Time: Eucla'
      },
      {
        identifier: 'Asia/Dili',
        description: 'Timor-Leste Time: Dili'
      },
      {
        identifier: 'Asia/Irkutsk',
        description: 'Irkutsk Time: Irkutsk'
      },
      {
        identifier: 'Asia/Jayapura',
        description: 'Eastern Indonesian Time: Jayapura'
      },
      {
        identifier: 'Asia/Pyongyang',
        description: 'Korea Standard Time: Pyongyang'
      },
      {
        identifier: 'Asia/Seoul',
        description: 'Korea Standard Time: Seoul'
      },
      {
        identifier: 'Asia/Tokyo',
        description: 'Japan Standard Time: Tokyo'
      },
      {
        identifier: 'Pacific/Palau',
        description: 'Palau Time: Palau'
      },
      {
        identifier: 'Australia/Adelaide',
        description: 'Australian Central Standard Time: Adelaide'
      },
      {
        identifier: 'Australia/Broken_Hill',
        description: 'Australian Central Standard Time: Broken Hill'
      },
      {
        identifier: 'Australia/Darwin',
        description: 'Australian Central Standard Time: Darwin'
      },
      {
        identifier: 'Asia/Yakutsk',
        description: 'Yakutsk Time: Yakutsk'
      },
      {
        identifier: 'Australia/Brisbane',
        description: 'Australian Eastern Standard Time: Brisbane'
      },
      {
        identifier: 'Australia/Hobart',
        description: 'Australian Eastern Standard Time: Hobart'
      },
      {
        identifier: 'Australia/Lindeman',
        description: 'Australian Eastern Standard Time: Lindeman'
      },
      {
        identifier: 'Australia/Melbourne',
        description: 'Australian Eastern Standard Time: Melbourne'
      },
      {
        identifier: 'Australia/Sydney',
        description: 'Australian Eastern Standard Time: Sydney'
      },
      {
        identifier: 'Pacific/Chuuk',
        description: 'Chamorro Standard Time: Chuuk'
      },
      {
        identifier: 'Pacific/Guam',
        description: 'Chamorro Standard Time: Guam'
      },
      {
        identifier: 'Pacific/Port_Moresby',
        description: 'Papua New Guinea Time: Port Moresby'
      },
      {
        identifier: 'Pacific/Saipan',
        description: 'Chamorro Standard Time: Saipan'
      },
      {
        identifier: 'Australia/Lord_Howe',
        description: 'Lord Howe Time: Lord Howe'
      },
      {
        identifier: 'Asia/Sakhalin',
        description: 'Sakhalin Time: Sakhalin'
      },
      {
        identifier: 'Asia/Vladivostok',
        description: 'Vladivostok Time: Vladivostok'
      },
      {
        identifier: 'Pacific/Efate',
        description: 'Vanuatu Time: Efate'
      },
      {
        identifier: 'Pacific/Guadalcanal',
        description: 'Solomon Islands Time: Guadalcanal'
      },
      {
        identifier: 'Pacific/Kosrae',
        description: 'Kosrae Time: Kosrae'
      },
      {
        identifier: 'Pacific/Noumea',
        description: 'New Caledonia Time: Noumea'
      },
      {
        identifier: 'Pacific/Pohnpei',
        description: 'Kosrae Time: Pohnpei'
      },
      {
        identifier: 'Pacific/Norfolk',
        description: 'Norfolk Time: Norfolk'
      },
      {
        identifier: 'Asia/Anadyr',
        description: 'Anadyr Time: Anadyr'
      },
      {
        identifier: 'Asia/Kamchatka',
        description: 'Kamchatka Time: Kamchatka'
      },
      {
        identifier: 'Asia/Magadan',
        description: 'Magadan Time: Magadan'
      },
      {
        identifier: 'Pacific/Auckland',
        description: 'New Zealand Standard Time: Auckland'
      },
      {
        identifier: 'Pacific/Fiji',
        description: 'Fiji Time: Fiji'
      },
      {
        identifier: 'Pacific/Funafuti',
        description: 'Tuvalu Time: Funafuti'
      },
      {
        identifier: 'Pacific/Kwajalein',
        description: 'Marshall Time: Kwajalein'
      },
      {
        identifier: 'Pacific/Majuro',
        description: 'Marshall Time: Majuro'
      },
      {
        identifier: 'Pacific/Nauru',
        description: 'Nauru Time: Nauru'
      },
      {
        identifier: 'Pacific/Tarawa',
        description: 'Gilbert Island Time: Tarawa'
      },
      {
        identifier: 'Pacific/Wallis',
        description: 'Wallis et Futuna Time: Wallis'
      },
      {
        identifier: 'Pacific/Chatham',
        description: 'Chatham Standard Time: Chatham'
      },
      {
        identifier: 'Pacific/Apia',
        description: 'Samoa Time: Apia'
      },
      {
        identifier: 'Pacific/Enderbury',
        description: 'Phoenix Island Time: Enderbury'
      },
      {
        identifier: 'Pacific/Tongatapu',
        description: 'Tonga Time: Tongatapu'
      },
      {
        identifier: 'Pacific/Fakaofo',
        description: 'Tokelau Time: Fakaofo'
      },
      {
        identifier: 'Pacific/Kiritimati',
        description: 'Line Islands Time: Kiritimati'
      }
    ]
    .map((timezone) => {
      const items = Intl.DateTimeFormat('en', {
        timeZoneName: 'short',
        timeZone: timezone.identifier,
      }) 
      .formatToParts();

      const timeZoneName = items.find((item) => item.type === 'timeZoneName');

      return {
        ...timezone,
        description: `(${timeZoneName?.value}) ${timezone.description}`,
      };
    });
  }

}