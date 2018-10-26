import turtle


def koch(a, n):
    if n > 0:
        koch(a / 3, n - 1)
        l.left(60)
        koch(a / 3, n - 1)
        l.left(240)
        koch(a / 3, n - 1)
        l.left(60)
        koch(a / 3, n - 1)
    else:
        l.forward(a)


if __name__ == '__main__':
    l = turtle.Turtle()
    screen = turtle.Screen()
    l.color("#127cd4", "#f0f8ff")
    screen.bgcolor("#c6e2ff")
    l.speed(0)
    l.hideturtle()

    # centring snowflake
    l.penup()
    l.backward(200)
    l.left(90)
    l.forward(150)
    l.right(90)
    l.pendown()

    # drawing
    l.begin_fill()
    for i in range(3):
        koch(400, 3)
        l.right(120)
    l.end_fill()
    turtle.exitonclick()