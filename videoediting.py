from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
from moviepy.editor import *
import os

def cutting(stattime, finishtime):
    ffmpeg_extract_subclip('static/video.mp4', stattime, finishtime, 'static/video1.mp4')
