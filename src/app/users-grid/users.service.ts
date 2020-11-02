import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserModel} from '../models/user';

const ELEMENT_DATA: UserModel[] = [
  {
  id: '75c96d27-dd2b-491c-8594-c408836a0c14',
  firstName: 'Rubie',
  lastName: 'Metzing',
  email: 'rmetzing0@senate.gov'
}, {
  id: 'd2e9fd37-6694-45a1-9da2-619d2a6fdb31',
  firstName: 'Shina',
  lastName: 'Pavic',
  email: 'spavic1@g.co'
}, {
  id: '14dc4d84-5ea8-4427-8305-3ebfa9f123f1',
  firstName: 'Donnell',
  lastName: 'Vickar',
  email: 'dvickar2@photobucket.com'
}, {
  id: '736acf51-0722-448f-8ce5-ae49094afb13',
  firstName: 'Robbi',
  lastName: 'Annetts',
  email: 'rannetts3@nymag.com'
}, {
  id: '273c9bdb-1594-4244-89ee-fb62d077bc91',
  firstName: 'Sorcha',
  lastName: 'Bernardin',
  email: 'sbernardin4@shop-pro.jp'
}, {
  id: 'be869610-dae0-4fc3-9762-35061d450d83',
  firstName: 'Mandi',
  lastName: 'Dionisii',
  email: 'mdionisii5@geocities.jp'
}, {
  id: '3f1fde64-4ed6-4fbf-a23e-6712e1e07384',
  firstName: 'Casar',
  lastName: 'Giacopini',
  email: 'cgiacopini6@narod.ru'
}, {
  id: 'eeb5e448-8774-4ce7-9a76-6d2920677845',
  firstName: 'Evelin',
  lastName: 'Boc',
  email: 'eboc7@wp.com'
}, {
  id: 'c1175f92-1063-43ff-af7c-e60012c2f40f',
  firstName: 'Vin',
  lastName: 'Guiver',
  email: 'vguiver8@answers.com'
}, {
  id: '111fa5e6-b732-49de-9c4b-7d13bac6fc4b',
  firstName: 'Micki',
  lastName: 'Smidmor',
  email: 'msmidmor9@digg.com'
}, {
  id: '30e5405a-126a-43f2-8624-7b03afc2f152',
  firstName: 'Olwen',
  lastName: 'Fantonetti',
  email: 'ofantonettia@nasa.gov'
}, {
  id: '40f5a67f-3b38-45ff-a31d-efff3528f041',
  firstName: 'Engelbert',
  lastName: 'Leebeter',
  email: 'eleebeterb@newyorker.com'
}, {
  id: '130e03c2-683d-4afc-9727-407d2acc4f8e',
  firstName: 'Bibi',
  lastName: 'Durston',
  email: 'bdurstonc@cloudflare.com'
}, {
  id: 'a372e3c7-0000-48d1-afb6-2df6a3459183',
  firstName: 'Devinne',
  lastName: 'Westnage',
  email: 'dwestnaged@seattletimes.com'
}, {
  id: '5651eb6f-c867-4b76-9be5-2acf1ecfecc4',
  firstName: 'Buddie',
  lastName: 'Clendening',
  email: 'bclendeninge@un.org'
}, {
  id: '8d6d34f0-c109-4f3b-9c91-e8c01ca2052a',
  firstName: 'Stanford',
  lastName: 'McVittie',
  email: 'smcvittief@google.ca'
}, {
  id: 'a3fdb763-8052-45a5-8094-311b686480f1',
  firstName: 'Helyn',
  lastName: 'Beall',
  email: 'hbeallg@g.co'
}, {
  id: 'a29133c6-6cb0-4ec5-ac58-9bce6bd1fc2f',
  firstName: 'Rebeka',
  lastName: 'Spata',
  email: 'rspatah@amazon.co.jp'
}, {
  id: 'eb189b55-01e5-4e4c-9581-937dca7be212',
  firstName: 'Roi',
  lastName: 'Philipeaux',
  email: 'rphilipeauxi@wordpress.org'
}, {
  id: '20ea70e9-a533-475f-8083-23426170d5d8',
  firstName: 'Sonny',
  lastName: 'Dennes',
  email: 'sdennesj@apache.org'
}, {
  id: '76172214-912c-4fdf-964b-d751c4ed840e',
  firstName: 'Bernarr',
  lastName: 'Walbridge',
  email: 'bwalbridgek@com.com'
}, {
  id: '08d8bc1f-b496-40c8-b1af-286b94f7e4bc',
  firstName: 'Fredelia',
  lastName: 'Haistwell',
  email: 'fhaistwelll@chronoengine.com'
}, {
  id: '6de6320b-4a85-4d30-b7c7-3151e1b983c4',
  firstName: 'Claiborn',
  lastName: 'Danett',
  email: 'cdanettm@list-manage.com'
}, {
  id: 'f4078c7f-b1e7-4b4c-8ff2-96d8dbad7f73',
  firstName: 'Elaina',
  lastName: 'Jankowski',
  email: 'ejankowskin@amazon.com'
}, {
  id: '93a428a5-a349-4a5c-8f47-c42f69114267',
  firstName: 'Reginald',
  lastName: 'Daenen',
  email: 'rdaeneno@senate.gov'
}, {
  id: '72a66c25-f8ac-4565-afbb-2b4774903b2b',
  firstName: 'Itch',
  lastName: 'Goadby',
  email: 'igoadbyp@shutterfly.com'
}, {
  id: '093ed75b-7c2d-407a-9091-21dffb87db61',
  firstName: 'Tynan',
  lastName: 'Lockitt',
  email: 'tlockittq@berkeley.edu'
}, {
  id: 'b8ae1e9a-da7f-4fef-a44f-8ca4419285b4',
  firstName: 'Lotte',
  lastName: 'Tooker',
  email: 'ltookerr@pen.io'
}, {
  id: '09f0890f-438e-44e4-9998-30bfa729180f',
  firstName: 'Sindee',
  lastName: 'Syres',
  email: 'ssyress@scribd.com'
}, {
  id: '718db884-c806-4221-a16a-1b5c74ef2c1d',
  firstName: 'Edan',
  lastName: 'Frape',
  email: 'efrapet@slate.com'
}, {
  id: '8e7d288f-40ea-4f17-b214-14478b4a0375',
  firstName: 'Jenica',
  lastName: 'McKnish',
  email: 'jmcknishu@i2i.jp'
}, {
  id: '3353c4ca-2974-4e02-a3ac-34429901fcdc',
  firstName: 'Karolina',
  lastName: 'Shimuk',
  email: 'kshimukv@tuttocitta.it'
}, {
  id: 'df562cf9-28d4-44bf-9a42-e15d915551ba',
  firstName: 'Reeta',
  lastName: 'Rodrig',
  email: 'rrodrigw@behance.net'
}, {
  id: '80dd7d7e-b04f-471b-a83e-73caafa263d1',
  firstName: 'Dayna',
  lastName: 'Causey',
  email: 'dcauseyx@webmd.com'
}, {
  id: 'a3222365-c401-42f5-bbce-ebf8bedbfc80',
  firstName: 'Johnathan',
  lastName: 'Blondell',
  email: 'jblondelly@hugedomains.com'
}, {
  id: 'c5b508ea-3a17-42bf-94c7-4e1c2127ca44',
  firstName: 'Tildie',
  lastName: 'Hindsberg',
  email: 'thindsbergz@mapy.cz'
}, {
  id: '8cc09777-b06e-4230-b93b-ddc5f433f94a',
  firstName: 'Ashly',
  lastName: 'Rennenbach',
  email: 'arennenbach10@huffingtonpost.com'
}, {
  id: '67b47c1f-6def-41dd-b0a7-eca1807c64d6',
  firstName: 'Lily',
  lastName: 'McPartlin',
  email: 'lmcpartlin11@dedecms.com'
}, {
  id: 'fa0b3a74-dc8f-4128-a37e-5be31e2e04a3',
  firstName: 'Angeli',
  lastName: 'Purkins',
  email: 'apurkins12@blogspot.com'
}, {
  id: '1a3650fa-55ce-47ba-964f-d509b4d2c190',
  firstName: 'Karena',
  lastName: 'Tolworthy',
  email: 'ktolworthy13@mapquest.com'
}, {
  id: '9fc4c92b-d263-49e2-9971-f71b041a6eec',
  firstName: 'Yvette',
  lastName: 'Early',
  email: 'yearly14@usda.gov'
}, {
  id: '5a4b8267-9985-4e41-b2f0-46c6b3b40359',
  firstName: 'Broderick',
  lastName: 'Cattlemull',
  email: 'bcattlemull15@techcrunch.com'
}, {
  id: '170afc10-a9f1-4825-9282-174876d46cbe',
  firstName: 'Fenelia',
  lastName: 'Gohier',
  email: 'fgohier16@bing.com'
}, {
  id: 'd338e441-25e7-4be2-970b-f24215fceddd',
  firstName: 'Odo',
  lastName: 'Mattimoe',
  email: 'omattimoe17@last.fm'
}, {
  id: '6c39ce0c-55aa-45ce-af06-1e755f3d0084',
  firstName: 'Cathi',
  lastName: 'Mole',
  email: 'cmole18@auda.org.au'
}, {
  id: '0cec6242-e16d-4c4e-9e09-19c5e2e7d412',
  firstName: 'Marsiella',
  lastName: 'Honatsch',
  email: 'mhonatsch19@blogtalkradio.com'
}, {
  id: '8d7845fe-ccab-431c-9ad7-f0c98fd590b4',
  firstName: 'Kennith',
  lastName: 'Furtado',
  email: 'kfurtado1a@jugem.jp'
}, {
  id: '72b680f0-cb70-4614-a081-a646e1fbc1fa',
  firstName: 'Janene',
  lastName: 'Tampen',
  email: 'jtampen1b@reddit.com'
}, {
  id: '0a787928-e9b8-43bb-9a5c-840f6a87c4ec',
  firstName: 'Luise',
  lastName: 'Ablott',
  email: 'lablott1c@hc360.com'
}, {
  id: '481d3023-1e13-47db-9b4a-6c30c98f6fda',
  firstName: 'Angelita',
  lastName: 'Kopke',
  email: 'akopke1d@indiegogo.com'
}, {
  id: '621b1fb1-c3de-45e9-8c26-2dac93581c08',
  firstName: 'Theadora',
  lastName: 'Ludovici',
  email: 'tludovici1e@dailymail.co.uk'
}, {
  id: 'e6745469-2f6f-4be1-8acc-8be867c4cd6a',
  firstName: 'Aloysia',
  lastName: 'Guillond',
  email: 'aguillond1f@opensource.org'
}, {
  id: '45209f06-4d63-443e-ace5-6de5724ab03d',
  firstName: 'Harman',
  lastName: 'Hadlow',
  email: 'hhadlow1g@sogou.com'
}, {
  id: '82fae0d7-068f-44a3-a878-fe5ba1438aae',
  firstName: 'Anneliese',
  lastName: 'Snadden',
  email: 'asnadden1h@nbcnews.com'
}, {
  id: '8d8c7493-3048-404e-85be-b36b4f9b3207',
  firstName: 'Oswell',
  lastName: 'Kaesmakers',
  email: 'okaesmakers1i@i2i.jp'
}, {
  id: 'dc88415b-7dd7-4c01-ab22-f4a8b695e075',
  firstName: 'Blake',
  lastName: 'Longfut',
  email: 'blongfut1j@nhs.uk'
}, {
  id: '8ef6592a-cbbe-4739-a06e-01b79f47a80c',
  firstName: 'Sinclair',
  lastName: 'Shane',
  email: 'sshane1k@skype.com'
}, {
  id: 'a78fb14c-f692-496e-aa04-4c10abcf9409',
  firstName: 'Hussein',
  lastName: 'Featherby',
  email: 'hfeatherby1l@loc.gov'
}, {
  id: 'e29d708d-77a5-4e1d-bbc9-08a36037fdb2',
  firstName: 'Sella',
  lastName: 'Steggals',
  email: 'ssteggals1m@4shared.com'
}, {
  id: '3c0746ad-a41c-4d29-a03c-2f7d12a64621',
  firstName: 'Bette',
  lastName: 'Westhoff',
  email: 'bwesthoff1n@reuters.com'
}, {
  id: 'f385f04c-69e9-4adc-b0ab-c0fee564a0cf',
  firstName: 'Tani',
  lastName: 'Tolfrey',
  email: 'ttolfrey1o@prweb.com'
}, {
  id: '46630a23-2499-42f0-83cd-c9cecd43b089',
  firstName: 'Shirline',
  lastName: 'Shatliffe',
  email: 'sshatliffe1p@ifeng.com'
}, {
  id: '34b64603-62ab-41a4-9552-95c0771a2861',
  firstName: 'Bernadette',
  lastName: 'Broadway',
  email: 'bbroadway1q@theglobeandmail.com'
}, {
  id: '6084f738-7609-43af-913d-c1f45a94b78c',
  firstName: 'Lucilia',
  lastName: 'Letteresse',
  email: 'lletteresse1r@yelp.com'
}, {
  id: '2ae4c1ae-abdf-4e08-84c4-aeaf740bffa2',
  firstName: 'Flin',
  lastName: 'Bouldstridge',
  email: 'fbouldstridge1s@ucla.edu'
}, {
  id: 'a2fa985e-de25-48b6-a9ab-ddf29f8aea9b',
  firstName: 'Rosetta',
  lastName: 'Karchewski',
  email: 'rkarchewski1t@ucoz.ru'
}, {
  id: '4f9fc1e0-3b29-45da-9aa9-eca0d1960b09',
  firstName: 'Emmott',
  lastName: 'Hastings',
  email: 'ehastings1u@google.com'
}, {
  id: '3ab363b7-6ad5-474c-bdeb-4ba7b6c720f3',
  firstName: 'Alfredo',
  lastName: 'Roseblade',
  email: 'aroseblade1v@tinypic.com'
}, {
  id: '72e8cf29-8704-4388-8507-06eef902be52',
  firstName: 'Jilly',
  lastName: 'Le Port',
  email: 'jleport1w@abc.net.au'
}, {
  id: 'c82a1ab9-c4a1-4081-a65e-3a27dbf62aa7',
  firstName: 'Frayda',
  lastName: 'Gowenlock',
  email: 'fgowenlock1x@msu.edu'
}, {
  id: 'a40cb811-4ad4-4bd8-ac94-51db39c92814',
  firstName: 'Davie',
  lastName: 'Tommasetti',
  email: 'dtommasetti1y@unicef.org'
}, {
  id: 'f83fc88f-6a26-4679-bca4-3668d9e9306e',
  firstName: 'Shirl',
  lastName: 'De Bruijn',
  email: 'sdebruijn1z@livejournal.com'
}, {
  id: 'a3ef8e8a-aef1-44c9-95e6-2052c63f1681',
  firstName: 'Wake',
  lastName: 'Danilchik',
  email: 'wdanilchik20@symantec.com'
}, {
  id: 'ab43521a-b35a-4aca-b05e-e30bf94b389e',
  firstName: 'Erin',
  lastName: 'McPhate',
  email: 'emcphate21@surveymonkey.com'
}, {
  id: '9737b515-2f4e-4fb9-8188-733955e0dc7c',
  firstName: 'Engelbert',
  lastName: 'Menichelli',
  email: 'emenichelli22@tripod.com'
}, {
  id: '783a9b78-5dc4-40d6-971f-ae0b18504936',
  firstName: 'Dorette',
  lastName: 'Aldwinckle',
  email: 'daldwinckle23@parallels.com'
}, {
  id: 'b86a9a9b-3cbe-4afe-9d12-1f184ec08e0e',
  firstName: 'Jennilee',
  lastName: 'Dovington',
  email: 'jdovington24@go.com'
}, {
  id: '73f99f32-5fb4-4cd7-9a3a-d0a192a52138',
  firstName: 'Ramon',
  lastName: 'Petters',
  email: 'rpetters25@people.com.cn'
}, {
  id: '686bc101-9983-4777-897c-0063d30ec4ad',
  firstName: 'Brett',
  lastName: 'Batkin',
  email: 'bbatkin26@multiply.com'
}, {
  id: 'c2912391-75cb-495a-b1f3-b0b28869d5ae',
  firstName: 'Mariel',
  lastName: 'Andriulis',
  email: 'mandriulis27@answers.com'
}, {
  id: '9721821b-bccc-475c-98ce-f9dd18199dc3',
  firstName: 'Othelia',
  lastName: 'Heinrici',
  email: 'oheinrici28@vkontakte.ru'
}, {
  id: 'cf5b7b97-08ae-4211-8d7e-46fa922f04da',
  firstName: 'Garrett',
  lastName: 'Gue',
  email: 'ggue29@g.co'
}, {
  id: '061cfea2-e228-41cc-bbd1-634a31138a7d',
  firstName: 'Griz',
  lastName: 'Boyes',
  email: 'gboyes2a@cbc.ca'
}, {
  id: '8d4db213-b837-4f2b-a348-c39b32268a32',
  firstName: 'Ailene',
  lastName: 'Botte',
  email: 'abotte2b@pinterest.com'
}, {
  id: '87f33278-cab4-45f4-a878-30f2de4b17c6',
  firstName: 'Kyle',
  lastName: 'Fairhead',
  email: 'kfairhead2c@soundcloud.com'
}, {
  id: 'c6a392fc-374e-4537-bfe5-62ead58113c7',
  firstName: 'Riordan',
  lastName: 'Prinn',
  email: 'rprinn2d@google.com'
}, {
  id: '1c80e3c1-e5f7-4db7-915e-1bd5b2bffbee',
  firstName: 'Lib',
  lastName: 'Summerskill',
  email: 'lsummerskill2e@blogtalkradio.com'
}, {
  id: 'b9e0ba31-ff3b-4681-b96d-bf721029fa44',
  firstName: 'Auguste',
  lastName: 'Flanigan',
  email: 'aflanigan2f@admin.ch'
}, {
  id: '2d7d1372-e575-44f4-8244-f06cd3c4e738',
  firstName: 'Eugen',
  lastName: 'Kermott',
  email: 'ekermott2g@cbslocal.com'
}, {
  id: 'b77cca1a-fc8e-4cd1-8588-3f3718912da5',
  firstName: 'Franchot',
  lastName: 'Wardrop',
  email: 'fwardrop2h@dyndns.org'
}, {
  id: '4a7d652d-7d94-4528-809d-df404e5bac6f',
  firstName: 'Hewet',
  lastName: 'Woodhouse',
  email: 'hwoodhouse2i@imgur.com'
}, {
  id: '9aa97ccb-1cdc-4d82-8d44-bd06d48a8dc8',
  firstName: 'Humfrid',
  lastName: 'Tutt',
  email: 'htutt2j@wired.com'
}, {
  id: 'a2ae9603-7041-48f8-bff2-f63cb12f8290',
  firstName: 'Wenona',
  lastName: 'Mellonby',
  email: 'wmellonby2k@reuters.com'
}, {
  id: 'b363ee6a-1fd1-49ce-9295-d893a0d27dd5',
  firstName: 'Giorgio',
  lastName: 'Lowde',
  email: 'glowde2l@ftc.gov'
}, {
  id: '87191df9-3527-4d65-b860-9c83885b2827',
  firstName: 'Farleigh',
  lastName: 'McDirmid',
  email: 'fmcdirmid2m@fotki.com'
}, {
  id: 'ec42e4fe-1928-4a5f-8da0-1a8a9f2a30af',
  firstName: 'Jeanne',
  lastName: 'Mercik',
  email: 'jmercik2n@mozilla.org'
}, {
  id: '9897a19f-1242-4d2c-bd3b-04f9d42d71b7',
  firstName: 'Ches',
  lastName: 'Vinecombe',
  email: 'cvinecombe2o@globo.com'
}, {
  id: '262880c8-0e21-4c51-bf6b-a755433c7714',
  firstName: 'Krystalle',
  lastName: 'Brecher',
  email: 'kbrecher2p@ucoz.ru'
}, {
  id: 'a65268c7-704e-4bc8-a2f2-99dd7aa0b19c',
  firstName: 'Garey',
  lastName: 'Blythe',
  email: 'gblythe2q@wordpress.com'
}, {
  id: 'd9181ded-82aa-47b5-99a1-cae5b2ba3ece',
  firstName: 'Gussy',
  lastName: 'Phillott',
  email: 'gphillott2r@drupal.org'
}
];

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<UserModel[]> {
    return of(ELEMENT_DATA);
    // return this.http.get(baseUrl);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
