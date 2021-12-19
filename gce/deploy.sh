MY_INSTANCE_NAME="kala"
ZONE=us-central1-a

gcloud compute instances create $MY_INSTANCE_NAME \
    --project=melodic-eye-180318 \
    --image-family=ubuntu-2004-lts \
    --image-project=ubuntu-os-cloud \
    --machine-type=e2-micro \
    --scopes userinfo-email,cloud-platform \
    --metadata-from-file startup-script=startup-script.sh \
    --zone $ZONE \
    --tags http-server