(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1",Bold:"Жирный","Bulleted List":"Маркированный список",Cancel:"Отмена","Choose heading":"Выбрать заголовок","Decrease indent":"Уменьшить отступ",Downloadable:"Загружаемые","Dropdown toolbar":"Выпадающая панель инструментов","Edit link":"Редактировать ссылку","Editor toolbar":"Панель инструментов редактора",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Horizontal line":"Горизонтальная линия","Increase indent":"Увеличить отступ",Italic:"Курсив",Link:"Ссылка","Link URL":"Ссылка URL",Next:"Следующий","Numbered List":"Нумерованный список","Open in a new tab":"Открыть в новой вкладке","Open link in new tab":"Открыть ссылку в новой вкладке",Paragraph:"Параграф",Previous:"Предыдущий",Redo:"Повторить","Rich Text Editor":"Редактор","Rich Text Editor, %0":"Редактор, %0",Save:"Сохранить","Show more items":"Другие инструменты","This link has no URL":"Для этой ссылки не установлен адрес URL",Underline:"Подчеркнутый",Undo:"Отменить",Unlink:"Убрать ссылку"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));