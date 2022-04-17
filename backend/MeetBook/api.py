import json, xmltodict, requests

from .models import Book, Genre

privateKey = "e717f4a54e6203ed15a21f7f68ef256cbbabef39fce603b132336f9c2fa3a726"

def check_book():
    url = f"http://data4library.kr/api/loanItemSrch?authKey={privateKey}"
    # xml을 dict 형태로 변경하여 알아보기 쉽게 변경
    response = xmltodict.parse(requests.get(url).text)
    # dict을 다시 json으로 만들어서 저장하기 편하게 만들어 줍니다.
    response = json.loads(json.dumps(response))['response']['docs']['doc']
    for res in response:
        try:
            g = Genre.objects.get(genre=res['class_nm'])
        except Genre.DoesNotExist:
            g = Genre(genre=res['class_nm'])
            g.save()
            
        try:
            b = Book.objects.get(book_name=res['bookname'], book_author=res['authors'],
                 book_contents='', book_publisher=res['publisher'],
                 isbn=res['isbn13'], book_pubdate=res['publication_year'],
                 loan_count=res['loan_count'], book_thumbnail_url=res['bookImageURL'],
                 genre_id=g.id)
        except Book.DoesNotExist:
            b = Book(book_name=res['bookname'], book_author=res['authors'],
                 book_contents='', book_publisher=res['publisher'],
                 isbn=res['isbn13'], book_pubdate=res['publication_year'],
                 loan_count=res['loan_count'], book_thumbnail_url=res['bookImageURL'],
                 genre_id=g.id)
            b.save()