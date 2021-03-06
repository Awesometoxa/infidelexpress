window.addEventListener("DOMContentLoaded", () => {
	let arrLang = {
		en: {
			// menu items
			"menu-home": "Home",
			"menu-story": "History",
			"menu-news": "News",
			"menu-music": "Music",
			"menu-video": "Video",
			"menu-tour": "tour",
			"menu-contacts": "Contacts",
			"promo-follow": "follow us:",
			"promo-listen": "Listen",
			"story-title": "History",
			"story-1": `The story of INFIDEL EXPRESS started in 2015 when future members of the band first met in Moscow and decided to form an international project with no limits in regards to cultures, religions and political backgrounds. The first single "Can You Really Hear The Song" was issued the day Turkey hit a Russian military plane which led to a long cold conflict between Vladimir Putin and Tajip Erdogan.`,
			"story-2": `The idea of making a peace by following the ­punk/­hardcore approach continued to evolve and led to a 8-­track debut album "The Riot Starts When You Are Young" which was recorded live and first performed in MIAM Studio Istanbul during the local riots and gas attack from the government forces.`,
			"story-3": `Soon after the album was mixed and mastered in Moscow but in particular days when it was scheduled to be issued, a government coup attempt happened in Turkey so it had to be postponed in respect to the victims of the conflict. Release finally happened in 2016.`,
			"story-4": `Despite problems with Visa and traveling between the countries Infidel Express continue to preserve the style of playing jambased songs in various punk locations like abandoned kindergartens and warehouses in Russia, Belarus, Ukraine, Turkey and local venues. It all led to the 2021 LP album Ultimate Plan which was composed in Istanbul, recorded and mixed in Moscow on Destroy the Humanity studios and saw the light recently in the new era of epidemic and mass hysteria.`,
			"news-title": "news",
			"news-title-1": "LP Ultimate Plan out now",
			"news-text-1": "",
			"news-btn-1": "Read more...",
			"music-title": "Music",
			"music-title-1": "Riots starts when you are young | Album",
			"music-text-1": "Fire-mix of various hardcore music genres, current topics of society and precise lyrics.",
			"music-btn-1": "Listen here...",
			"music-title-2": "Can you realy hear the song | Single",
			"music-text-2": "First single Infidel Express",
			"music-btn-2": "Listen here...",
			"video-title": "Video",
			"video-follow": "follow us:",
			"tour-title": "tour",
			"tour-fix": "Record new album now!",
			"tour-more": "more information in:",
			"contacts-title": "Contacts",
			"contacts-adress": "Moscow, Russia   |   Istanbul, Turkey",
			"contacts-phone": "phone:",
			"contacts-email": "e-mail:",
			"contacts-links": "links:",
			"contacts-thanks": "thanks:",
			"contacts-create": "site created by:",
		},

		ru: {
			"menu-home": "Главная",
			"menu-story": "История",
			"menu-news": "Новости",
			"menu-music": "Музыка",
			"menu-video": "Видео",
			"menu-tour": "Тур",
			"menu-contacts": "Контакты",
			"promo-listen": "Слушать",
			"promo-follow": "подписывайтесь на наши соцсети:",
			"story-title": "История",
			"story-1": `История INFIDEL EXPRESS началась в 2015 году, когда будущие участники группы впервые встретились в Москве и решили создать международный проект без ограничений в отношении культур, религий и политических традиций. Первый сингл "Can You Really Hear The Song" был выпущен в день, когда Турция сбила российских истребитель, что привело к длительному холодному конфликту между Владимиром Путиным и Тайипом Эрдоганом`,
			"story-2": `Идея заключить мир, следуя панк\хардкор идеологии, продолжала развиваться и воплотилась в дебютном альбоме состоящем из восьми песен "Riot Starts When You Young", который был записан вживую и впервые исполнен в MIAM Studio Istanbul во время местных восстаний курдов и газовой атаки правительственных сил.`,
			"story-3":
				"Вскоре после того, как альбом был сведён в Москве и должен был быть выпущен, в Турции произошла попытка государственного переворота, поэтому выход пришлось отложить до завершения конфликта из уважения к его невинным жертвам. Релиз наконец-то состоялся в 2016-ом году.",
			"story-4":
				"Несмотря на проблемы с визами и путешествиями между странами, Infidel Express продолжал концерты в различных панк-местах, таких как заброшенные детские сады и склады в России, Беларуси, Украине, Турции.",
			"news-title": "новости",
			"news-title-1": "Полноформатный Ultimate Plan доступен для прослушивания",
			"news-text-1": "",
			"news-btn-1": "Узнать больше...",
			"music-title": "Музыка",
			"music-title-1": "Riots starts when you are young | Альбом",
			"music-text-1":
				"Огненная смесь различных хардкор жанров, актуальных тем общества и бьющей в самое сердце лирики.",
			"music-btn-1": "Слушать тут...",
			"music-title-2": "Can you realy hear the song | Сингл",
			"music-text-2": "Первый сингл группы с альбома 2016 года",
			"music-btn-2": "Слушать тут...",
			"video-title": "видео",
			"video-follow": "подписывайся на наш канал:",
			"tour-fix": "Идет запись нового альбома!",
			"tour-more": "больше информации тут:",
			"contacts-title": "Контакты",
			"contacts-adress": "Москва, Россия   |   Стамбул, Турция",
			"contacts-phone": "телефоны для связи:",
			"contacts-email": "электронная почта:",
			"contacts-links": "ссылки:",
			"contacts-thanks": "спасибо нашим друзьям:",
			"contacts-create": "сайт создан:",
		},
		tu: {
			"menu-home": "Anasayfa",
			"menu-story": "Geçmiş",
			"menu-news": "Haberler",
			"menu-music": "Müzik",
			"menu-video": "Vidyo",
			"menu-tour": "Tur",
			"menu-contacts": "İletişim",
			"promo-listen": "Dinlemek",
			"promo-follow": "takip edin:",
			"story-title": "Geçmiş",
			"story-1": `INFIDEL EXPRESS'in hikayesi, grubun müstakbel üyelerinin Moskova'da ilk kez bir araya geldiği 2015 yılında, kültürler, dinler ve siyasi geçmişler açısından sınır tanımayan uluslararası bir proje oluşturmaya karar vermeleriyle başladı. İlk single'ı "Şarkıyı Gerçekten Duyabiliyor musun", Türkiye'nin bir Rus askeri uçağını vurduğu ve Vladimir Putin ile Tajip Erdoğan arasında uzun bir soğuk çatışmaya yol açtığı gün yayınlandı.`,
			"story-2": `Punk/hardcore yaklaşımını izleyerek barış yapma fikri gelişmeye devam etti ve yerel ayaklanmalar sırasında canlı olarak kaydedilen ve ilk kez MIAM Studio İstanbul'da seslendirilen 8 parçalık bir ilk albüm olan "The Riot Starts When You Are Young"ın ortaya çıkmasına neden oldu. hükümet güçlerinden gaz saldırısı.`,
			"story-3": `Albümün Moskova'da mix ve mastering'i yapıldıktan kısa bir süre sonra, ancak özellikle yayınlanmasının planlandığı günlerde, Türkiye'de bir hükümet darbe girişimi oldu ve çatışma mağdurları açısından ertelenmek zorunda kaldı. Yayın nihayet 2016'da gerçekleşti.`,
			"story-4": `Despite problems with Visa and traveling between the countries Infidel Express continue to preserve the style of playing jambased songs in various punk locations like abandoned kindergartens and warehouses in Russia, Belarus, Ukraine, Turkey and local venues. It all led to the 2021 LP album Ultimate Plan which was composed in Istanbul, recorded and mixed in Moscow on Destroy the Humanity studios and saw the light recently in the new era of epidemic and mass hysteria.`,
			"news-title": "Haberler",
			"news-title-1": " LP Ultimate Planı şimdi çıktı",
			"news-text-1": "",
			"news-btn-1": "Devamını oku...",
			"music-title": "Müzik",
			"music-title-1": "Riots starts when you are young | Album",
			"music-text-1": "Çeşitli hardcore türlerinin karışımı, güncel toplum konularıyla ilgili ve kesin sözler",
			"music-btn-1": "Buradan dinleyin...",
			"music-title-2": "Can you realy hear the song | Single",
			"music-text-2": "Infidel expression ilk teklisi",
			"music-btn-2": "Buradan dinleyin...",
			"video-title": "Vidyo",
			"video-follow": "takip edin:",
			"tour-title": "Tur",
			"tour-fix": "Yeni album kayıtta!",
			"tour-more": "daha fazla bilgi için:",
			"contacts-title": "İletişim",
			"contacts-adress": "Moskova, Rusya   |   İstanbul, Türkiye",
			"contacts-phone": "telefon:",
			"contacts-email": "e-posta:",
			"contacts-links": "bağlantılar:",
			"contacts-thanks": "teşekkürler:",
			"contacts-create": "siteyi oluşturan::",
		},
	};

	$(function () {
		$(".translate").click(function () {
			var lang = $(this).attr("id");

			$(".lang").each(function (index, item) {
				$(this).text(arrLang[lang][$(this).attr("key")]);
			});
		});
	});
});
