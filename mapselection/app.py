import pygame
import time

pygame.init()

RES = WIDTH, HEIGHT = 1366, 768

screen = pygame.display.set_mode([WIDTH, HEIGHT])
FPS = 60
clock = pygame.time.Clock()

bansPlacement = (100, 100)
picksPlacement = (536, 100)
bansSpacing = 23
picksSpacing = 14

rootPath = "random//mapselection//images//"

image = pygame.image.load("random\mapselection\images\christmassnek.png")
background = pygame.image.load("random//mapselection//images//bg.png")

maps = {"ascent", "haven", "fracture", "pearl",
        "bind", "icebox", "breeze", "lotus", "split"}

bans = []
picks = []


def loadImage(rootPath, fileName):
    return pygame.image.load(f"{rootPath}{fileName}.png")


def blitImage(image, placement):
    for i in range(255):
        image.set_alpha(i)
        screen.blit(image, placement)
        pygame.display.update()
        time.sleep(0.00001)


def addBan(map):
    bans.append(map)
    banOrder = len(bans) - 1
    placement = (bansPlacement[0], bansPlacement[1] + bansSpacing*banOrder)
    mapImage = loadImage(rootPath, "ban_"+map)
    blitImage(mapImage, placement)
    return True


time.sleep(1)

background.set_alpha(100)
blitImage(background, (0, 0))

bansTotal = 0
picksTotal = 0

running = True

while running:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()

    for i in range(255):
        image.set_alpha(i)
        screen.blit(image, (0, 0))
        pygame.display.update()
        time.sleep(0.0001)

    for i in range(255, 0, -1):
        image.set_alpha(i)
        screen.blit(image, (0, 0))
        pygame.display.update()
        time.sleep(0.0001)

    pygame.display.flip()
    clock.tick(FPS)

    # print("Input Ban " + str(bansTotal+1))
    # bannedMap = str(input())
    # ban = addBan(bannedMap)
