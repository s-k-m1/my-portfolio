from django.shortcuts import render
from .forms import ContactForm
from django.http import JsonResponse


def home(request):
    return render(request, 'pages/main/home.html')


def about(request):
    return render(request, 'pages/main/about.html')


def blog(request):
    return render(request, 'pages/main/blog.html')


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()

            # AJAX success response
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({
                    "success": True,
                    "message": "Your message has been sent successfully!"
                })

        else:
            # Collect clean error messages
            error_list = []
            for field, errors in form.errors.items():
                error_list.append(errors[0])

            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({
                    "success": False,
                    "errors": error_list
                })

    else:
        form = ContactForm()

    return render(request, "pages/main/contact.html", {"form": form})