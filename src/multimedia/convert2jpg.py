import cv2
import os
import glob

# Get the list of all .png images in the working directory
images = glob.glob('*.png')

# Create a new directory named 'jpgimages' if it does not exist
if not os.path.exists('jpgimages'):
    os.makedirs('jpgimages')

# Loop through all .png images
for image in images:
    # Read the image
    img = cv2.imread(image)
    # Get the filename without the extension
    filename = os.path.splitext(image)[0]
    # Convert and save the image in the 'jpgimages' directory
    cv2.imwrite(f'jpgimages/{filename}.jpg', img)
