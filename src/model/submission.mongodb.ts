import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({ schemaOptions: { collection: 'Submission' } })
class SubmissionClass {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public websiteOrFacebook!: string;

  @prop({ required: true })
  public tel!: string;

  @prop({ required: true })
  public budget!: string;

  @prop({ required: true, type: () => [String] })
  public services!: string[];
}

const SubmissionModel = getModelForClass(SubmissionClass);

export { SubmissionModel, SubmissionClass }
