# AI Prompts

* Potrzebuję pomocy w projekcie z Angulara. Poniżej wymagania funkcjonalne, generalnie będzie to message bar generyczny
Message bars are nonmodal semantic dialogs that can be displayed only within a page flow. 
I teraz ważne zasady. Nie chce żebyś pisał mi kod. Chyba że Cię poproszę o jakiś mały snippet. Kod generuj tylko jeśli wyraźnie o to poproszę i tylko mały snippet o który proszę bez opakowywania w komponenty czy całe atrybuty html.

* przede wszystkim chciałem się Ciebie zapytać co sądzisz o mojej ogólnej wizji na ten projekt.
Chciałbym stworzyć serwis który będzie można wstrzykiwać przez DI to dowolnego komponentu. Serwis ten będzie miał za zadanie wyświetlać powiadomienie. Jako parametry przyjmować będzie tekst, modyfikatory ważności buttony oraz funkcje podpięte pod te buttony.
Serwis ten będzie oparty na observable - Lista messegów które będą subskrypowane na samej górze DOM, w app.component w pętli. W ten sposob w app.component globalnie będę miał dostęp do listy messegów która będzie asynchronicznie bez observabla uzupełniena. Co o tym sądzisz?

* potrzebuje pomocy w scss, stworzyłem sobie 2 przykładowe komponenty które mogą używać tego serwisu i chciałbym je pokazać jako dwa prostokąty żeby zaznaczyć ich odrębność.
Zrobiłem to prostym borderem ale nie jest to ładne
.frame {
    border: 1px solid;
    width: 300px;
    height: 300px;
    padding: 10px;
}
Możesz zaproponować coś ładniejszego?

* teraz chciałbym żebyś stworzył mi snippet przycisku w tym komponenecie. Nie musi to być nic z fajerwerkami, byle nie był defaultowy i nie był brzydki i surowy. Potrzebuej wersji primary i secondary

* jak nazwać komponent w którym będę przechowywał foreacha z observabla z message barami?

* potrzebuje stylu dla samego messege baru. Zwykły pasek w którym będę umieszczał tekst powiadomienia
Blue: #0471F0 (dark), #F0F7FE (light)
ciemny jest od tekstu a jasny od tła

* potrzebuje ng template który przyjmuje messege jako parametr żebym mógł go użyć w template

* a dodaj mi do buttona styl jeśli jest disabled

* mam ikonkę w pliku svg na dysku i chciałbym ją pokazać w komponencie. Jak to zrobić?

* chciałem zapytać o standard nazewnictwa w observablach. Bo mam serwis i chciałbym mieć w nim jeden observable który będzie emitował wartość w przypadku dodania wiadomości a jeden obs w przypadku chęci usunięcia wiadomości. 
Dopóki nie pojawiła się chęc usuwania to miałem jeden obs o nazwie message$ ale teraz to bez sensu. I zastanawiam sie czy moge miec dwa np o nazwie z czasownikiem messageAdded$, messageRemove$?