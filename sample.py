import face_recognition as fr

# Sample code at https://github.com/ageitgey/face_recognition/blob/master/README.md

bimesh_pic = fr.load_image_file("linkedin_data/pics/bimesh.jpeg")
bimesh_encoding = fr.face_encodings(bimesh_pic)[0]  # we could prob save this encoding instead of recomputing
                                                    # TODO(bimesh): play with the input parameters

not_bimesh_pic = fr.load_image_file("linkedin_data/pics/ellen.jpeg")
not_bimesh_encoding = fr.face_encodings(not_bimesh_pic)[0]

# The encodings could then be compared to any other picture!

bimesh_test_pic = fr.load_image_file("test_pics/bimesh.jpg")
bimesh_test_encoding = fr.face_encodings(bimesh_test_pic)[0]

results = fr.compare_faces([bimesh_encoding, not_bimesh_encoding], bimesh_test_encoding)

print(list(zip(["Bimesh", "Not Bimesh"], results)))
